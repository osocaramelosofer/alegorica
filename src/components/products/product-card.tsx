import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer
} from '@/components/ui/morphing-dialog'
import { formatCurrencyMXN } from '@/lib/utils/currency'
interface ProductCardProps {
  name: string
  description: string
  coverImage: string
  price: number
}
export function ProductCard({
  name,
  description,
  coverImage,
  price
}: ProductCardProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: '12px'
        }}
        className="shadow-xl flex md:max-w-[340px] flex-col overflow-hidden border border-zinc-950/10 bg-[#F5E6D0] p-3"
      >
        <MorphingDialogImage
          src={coverImage}
          alt="image product"
          className="md:h-[337px] object-cover rounded-lg "
        />
        <div className="flex flex-grow flex-row items-end justify-between md:px-2 py-5">
          <div>
            <MorphingDialogTitle className="text-nowrap text-black font-playFair md:text-3xl text-xl font-extrabold italic">
              {name}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-nowrap text-zinc-800 text-xl font-playFair md:text-3xl ">
              {formatCurrencyMXN(price)}
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer className="bg-zinc-500/40">
        <MorphingDialogContent
          style={{
            borderRadius: '24px'
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-auto border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
        >
          <MorphingDialogImage
            src={coverImage}
            alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
            className="h-full w-full"
          />
          <div className="p-6">
            <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
              {name}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              {formatCurrencyMXN(price)}
            </MorphingDialogSubtitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 }
              }}
            >
              <p className="mt-2 text-zinc-500 dark:text-zinc-500">
                {description}
              </p>
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="text-zinc-500" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
