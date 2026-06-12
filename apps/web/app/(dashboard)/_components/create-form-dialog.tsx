"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Zap } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { Dialog, VerseInput, VerseTextarea } from "@/components/verse/dialog";
import { useToast } from "@/components/verse/toast";

interface Props {
  open: boolean;
  onClose: () => void;
}

const TITLE_MAX = 80;
const DESC_MAX = 240;

/**
 * "Create New Form Node" — creates a draft form and routes the user
 * to its builder page.
 */
export function CreateFormDialog({ open, onClose }: Props) {
  const router = useRouter();
  const toast = useToast();
  const utils = trpc.useUtils();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<{ title?: string }>({});

  const reset = () => {
    setTitle("");
    setDescription("");
    setErrors({});
  };

  const handleClose = () => {
    if (createForm.isPending) return;
    onClose();
    setTimeout(reset, 250);
  };

  const createForm = trpc.forms.create.useMutation({
    onSuccess: async (form: { id: string; title: string }) => {
      await utils.forms.list.invalidate();
      toast.push({
        variant: "success",
        title: "Node created",
        message: `${form.title} is ready for configuration.`,
      });
      onClose();
      reset();
      router.push(`/dashboard/forms/${form.id}`);
    },
    onError: (err) => {
      toast.push({
        variant: "error",
        title: "Could not create node",
        message: err.message?.slice(0, 120) ?? "Something went wrong.",
      });
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const t = title.trim();
    if (!t) {
      setErrors({ title: "Every node needs a name." });
      return;
    }
    if (t.length > TITLE_MAX) {
      setErrors({ title: `Keep it under ${TITLE_MAX} characters.` });
      return;
    }

    setErrors({});
    createForm.mutate({
      title: t,
      description: description.trim() || undefined,
      visibility: "unlisted",
      collectEmail: false,
      settings: {},
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      title="Create New Form Node"
      subtitle="WebVerse · Node"
      width="md"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <VerseInput
          label="Form Title"
          placeholder="e.g. Customer Feedback Survey"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          maxLength={TITLE_MAX + 20}
          disabled={createForm.isPending}
          error={errors.title}
          hint={`${title.length}/${TITLE_MAX} characters`}
        />

        <VerseTextarea
          label="Description"
          placeholder="What does this form capture? Who should fill it out?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={DESC_MAX + 20}
          disabled={createForm.isPending}
          hint={`Optional · ${description.length}/${DESC_MAX}`}
        />

        <div className="rounded-lg border border-verse-cyan/20 bg-verse-cyan/5 p-3">
          <div className="flex items-start gap-2">
            <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-verse-cyan" />
            <div className="text-xs leading-relaxed text-muted-foreground">
              Your form starts in <span className="text-foreground">draft mode</span>.
              You&apos;ll add fields and configure the node on the next screen,
              then publish when it&apos;s ready to go live.
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={handleClose}
            disabled={createForm.isPending}
            className="h-10 rounded-lg border border-[#24243A] px-4 text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-verse-red hover:text-verse-red disabled:opacity-40"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={createForm.isPending || !title.trim()}
            className="btn-verse flex h-10 items-center gap-2 rounded-lg bg-gradient-to-r from-verse-red to-verse-redHover px-5 font-heading text-xs uppercase tracking-[0.12em] text-white shadow-[0_0_20px_rgba(255,23,68,0.25)] transition-shadow hover:shadow-[0_0_30px_rgba(255,23,68,0.4)] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
          >
            {createForm.isPending ? "Creating…" : "Create Node"}
          </button>
        </div>
      </form>
    </Dialog>
  );
}
