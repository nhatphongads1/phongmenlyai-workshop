import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Check, Gift, MessageCircle, Play, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import workshopHero from "@/assets/uyen-nhi-cover.jpeg";
import speakerPortrait from "@/assets/phong-menly-avatar.png";
import paymentQr from "@/assets/payment-qr-50000.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nuôi AI Agent Cày Thay Mình 24/7 | Workshop Thực Chiến" },
      { name: "description", content: "Workshop thực chiến giúp bạn xây đội ngũ AI Agent, tự động hóa nội dung và biến kỹ năng thành sản phẩm." },
      { property: "og:title", content: "Nuôi AI Agent Cày Thay Mình 24/7" },
      { property: "og:description", content: "Từ kỹ năng cá nhân đến hệ thống AI Agent làm việc thực sự cho bạn." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  ["Đội 3 AI Agent làm việc thay bạn", "Nhận quy trình xây dựng ba Agent chuyên biệt, tích hợp sẵn kỹ năng để bắt đầu nhanh."],
  ["Xây kênh bằng Subagent khác biệt", "Hé lộ cách phối hợp nhiều Agent để nghiên cứu, sáng tạo và vận hành nội dung có hệ thống."],
  ["Tự build app cho công việc", "Tự tay tạo ứng dụng AI theo nhu cầu riêng mà không còn phụ thuộc vào đội kỹ thuật."],
  ["Thương mại hóa Skill AI", "Biết cách đóng gói, định vị và vận hành một kỹ năng AI thành sản phẩm có thể bán."],
  ["Bộ tài nguyên độc quyền", "Nhận checklist, câu lệnh mẫu và tài liệu thực hành để áp dụng ngay sau buổi học."],
  ["Ý tưởng tạo thu nhập", "Khám phá các mô hình ứng dụng AI Agent thực tế cho KOL, Affiliate và nhà sáng tạo."],
];

function RegisterButton({ label = "Nhận vé & miễn phí tài nguyên" }: { label?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="workshop" size="workshop" className="w-full max-w-md rounded-lg">
          {label}<ArrowUpRight aria-hidden="true" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] max-w-md overflow-y-auto rounded-xl border-primary/20 p-5 sm:p-6">
        <DialogHeader className="items-center text-center">
          <DialogTitle className="font-display text-2xl font-semibold tracking-tight">Đăng ký vé workshop</DialogTitle>
          <DialogDescription>Quét mã QR để thanh toán vé tham gia.</DialogDescription>
        </DialogHeader>
        <div className="rounded-xl border border-primary/15 bg-secondary/40 p-3">
          <img src={paymentQr} alt="Mã QR thanh toán Agribank 50.000 đồng" width={720} height={1280} className="mx-auto w-full max-w-[280px] rounded-lg bg-white" />
        </div>
        <div className="rounded-lg border border-border bg-card p-4 text-center">
          <p className="font-mono text-xs uppercase text-muted-foreground">Giá vé</p>
          <p className="mt-1 font-display text-4xl font-bold tracking-tight text-primary">50.000đ</p>
          <p className="mt-2 text-sm text-muted-foreground">Agribank · STK 6905215016647 · Trương Nguyễn Nhật Phong</p>
        </div>
        <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <p><strong className="text-foreground">Bước 1:</strong> Quét mã QR hoặc chuyển khoản đúng số tiền 50.000đ.</p>
          <p><strong className="text-foreground">Bước 2:</strong> Chụp màn hình giao dịch thành công.</p>
          <p><strong className="text-foreground">Bước 3:</strong> Gửi ảnh xác nhận qua Zalo để nhận vé và link tham gia.</p>
        </div>
        <Button asChild variant="workshop" className="h-12 w-full rounded-lg">
          <a href="https://zalo.me/0793576831" target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Liên hệ Zalo 0793576831</a>
        </Button>
      </DialogContent>
    </Dialog>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground selection:bg-primary selection:text-primary-foreground">
      <div className="bg-primary px-4 py-3 text-center text-primary-foreground">
        <p className="text-xs font-medium tracking-wide">• Huấn luyện cấp tốc — một lần duy nhất •</p>
      </div>

      <header className="mx-auto max-w-[880px] px-5 pb-16 pt-14 text-center sm:px-8 sm:pt-20">
        <div className="workshop-rise">
          <p className="mb-5 text-sm font-semibold tracking-wide text-primary">Workshop thực chiến dành cho người muốn đi trước</p>
          <h1 className="text-balance font-display text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Nuôi AI Agent cày thay mình <span className="text-primary">24/7</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            Biến kỹ năng của bạn thành một hệ thống AI Agent biết nghiên cứu, sáng tạo và vận hành công việc thực sự.
          </p>
        </div>

        <div className="workshop-rise mt-9 inline-flex items-center gap-3 rounded-lg border border-primary/15 bg-secondary px-5 py-3 [animation-delay:100ms]">
          <CalendarDays className="size-5 text-primary" aria-hidden="true" />
          <span className="font-mono text-sm font-medium text-secondary-foreground">20:00 — Chủ nhật, 27/09</span>
        </div>

        <div className="workshop-rise group relative mt-10 [animation-delay:200ms]">
          <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-30 blur-xl transition-opacity duration-700 group-hover:opacity-60" />
          <img src={workshopHero} alt="Uyển Nhi tại workshop AI Agent" width={1366} height={768} className="relative aspect-video w-full rounded-lg border border-primary/20 object-cover object-center shadow-2xl" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-md bg-foreground/90 px-3 py-2 font-mono text-[10px] uppercase text-background backdrop-blur sm:bottom-5 sm:left-5">
            <Sparkles className="size-3 text-primary" /> AI Agent thực chiến
          </div>
        </div>

        <div className="workshop-rise mt-10 [animation-delay:300ms]">
          <p className="mb-4 text-sm italic text-muted-foreground">Bạn muốn đứng ngoài cuộc chơi AI hay bắt đầu <strong className="text-primary">ngay hôm nay?</strong></p>
          <RegisterButton />
          <p className="mt-4 font-mono text-[11px] text-muted-foreground">Giữ chỗ và nhận trọn bộ tài nguyên độc quyền</p>
        </div>
      </header>

      <section className="border-y border-border bg-card px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-3 text-sm font-semibold tracking-wide text-primary">Giá trị bạn mang về</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Bạn sẽ nhận được gì?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Không chỉ là ý tưởng — đây là bộ công cụ và quy trình để bạn bắt tay làm ngay.</p>
          </div>
          <div className="grid gap-3 sm:gap-4">
            {benefits.map(([title, description], index) => (
              <article key={title} className="group grid grid-cols-[auto_minmax(0,1fr)] gap-4 rounded-lg border border-border bg-background p-5 transition-colors hover:border-primary/40 sm:grid-cols-[64px_minmax(0,1fr)_auto] sm:items-center sm:gap-6 sm:p-6">
                <span className="font-display text-4xl font-extrabold text-primary/25 transition-colors group-hover:text-primary">{String(index + 1).padStart(2, "0")}</span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold leading-tight sm:text-2xl">{title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{description}</p>
                </div>
                <ArrowUpRight className="hidden size-5 shrink-0 text-primary sm:block" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold tracking-wide text-primary">Người đồng hành</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Diễn giả huấn luyện</h2>
          </div>
          <div className="rounded-xl border border-border bg-card p-2 shadow-xl">
            <div className="flex flex-col items-center gap-8 rounded-lg bg-background p-6 sm:flex-row sm:p-8">
              <div className="relative shrink-0">
                <div className="workshop-pulse absolute -inset-3 rounded-full bg-primary/15" />
                <img src={speakerPortrait} alt="Chân dung diễn giả Phong Menly" width={768} height={768} loading="lazy" className="relative size-40 rounded-full border-4 border-card object-cover object-[50%_18%] shadow-lg sm:size-48" />
              </div>
              <div className="min-w-0 text-center sm:text-left">
                <h3 className="font-display text-3xl font-semibold tracking-tight">Phong Menly</h3>
                <p className="mt-2 text-sm font-semibold tracking-wide text-primary">KOL AI & Vibe Coding</p>
                <div className="my-5 flex flex-wrap justify-center gap-2 sm:justify-start">
                  {["AI Expert", "Creator", "Vibe Coding"].map((tag) => <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase text-secondary-foreground">{tag}</span>)}
                </div>
                <p className="text-pretty leading-relaxed text-muted-foreground">Người hướng dẫn thực chiến về AI Agent, giúp nhà sáng tạo và người kinh doanh biến quy trình thủ công thành hệ thống tự động dễ vận hành.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground px-5 py-20 text-background sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-10 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-5">
            <div className="min-w-0">
              <p className="mb-3 text-sm font-semibold tracking-wide text-primary">Preview workshop</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Xem trước nội dung</h2>
              <p className="mt-4 text-background/60">Một lát cắt ngắn về cách AI Agent phối hợp để hoàn thành công việc.</p>
            </div>
            <span className="hidden rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase text-primary sm:block">Exclusive</span>
          </div>
          <a href="https://www.youtube.com/watch?v=K2H9p7IGhdo" target="_blank" rel="noreferrer" className="group relative block aspect-video overflow-hidden rounded-lg border border-background/10" aria-label="Xem video giới thiệu workshop trên YouTube">
            <img src={workshopHero} alt="Ảnh xem trước video workshop AI Agent" width={1280} height={720} loading="lazy" className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-[1.02]" />
            <span className="absolute inset-0 grid place-items-center"><span className="grid size-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform group-hover:scale-110"><Play className="ml-1 size-6 fill-current" /></span></span>
          </a>
        </div>
      </section>

      <section id="register" className="scroll-mt-8 px-5 py-24 text-center sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[640px]">
          <div className="mx-auto mb-6 grid size-12 place-items-center rounded-full bg-secondary text-primary"><Users className="size-5" /></div>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Bắt đầu hành trình AI của bạn</h2>
          <p className="mx-auto mb-9 mt-5 max-w-xl text-lg text-muted-foreground">Tham gia cùng cộng đồng KOL, Affiliate và nhà sáng tạo đang xây dựng hệ thống AI của riêng mình.</p>
          <RegisterButton label="Đăng ký giữ chỗ ngay" />
          <div className="mx-auto mt-8 grid max-w-md gap-3 text-left text-sm text-muted-foreground sm:grid-cols-2">
            <span className="flex items-center gap-2"><Check className="size-4 shrink-0 text-primary" /> Link tham gia workshop</span>
            <span className="flex items-center gap-2"><Gift className="size-4 shrink-0 text-primary" /> Bộ tài nguyên thực hành</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-9 text-center text-xs text-muted-foreground">AI Agent Workshop © 2026</footer>
    </main>
  );
}
