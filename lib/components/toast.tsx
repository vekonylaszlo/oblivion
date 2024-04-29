import { Toaster as Sonner } from "sonner"
import "../index.css"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {

  return (
    <Sonner
      toastOptions={{
        unstyled: true,
        duration: 90000,
        classNames: {
          toast: "bg-popover/90 backdrop-blur-md border !transition-colors border-border p-2 w-full max-w-lg rounded-theme",
          description: "text-muted-foreground text-sm",
          actionButton: "bg-primary hover:bg-primary/80 text-xs text-primary-foreground px-2 h-6 rounded-theme ml-2 mt-2",
          cancelButton: "!bg-background hover:!bg-background/80 text-xs !text-foreground  text-primary-foreground px-2 h-6 rounded-theme mt-2",

        },
      }}
      {...props}
    />
  )
}

export { Toaster }
