import { createContext, useContext, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { EnquiryForm } from "./EnquiryForm";

type Ctx = { open: (course?: string) => void };
const DemoCtx = createContext<Ctx>({ open: () => {} });
export const useDemo = () => useContext(DemoCtx);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [course, setCourse] = useState<string | undefined>();
  return (
    <DemoCtx.Provider value={{ open: (c) => { setCourse(c); setOpen(true); } }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="max-h-[92vh] overflow-y-auto rounded-3xl sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl">Book a free demo</DialogTitle>
            <DialogDescription>
              Share your details and our team will call you to arrange a demo session.
            </DialogDescription>
          </DialogHeader>
          <EnquiryForm kind="demo" defaultCourse={course} compact />
        </DialogContent>
      </Dialog>
    </DemoCtx.Provider>
  );
}
