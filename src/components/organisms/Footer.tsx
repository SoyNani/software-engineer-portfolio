export default function Footer() {
  return (
    <footer className="section" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
      <div className="flex flex-col sm:flex-row justify-between gap-2 text-[10px] font-mono text-[#5a5a64] tracking-wider border-t border-white/8 pt-5">
        <span>© {new Date().getFullYear()} Laura Daniela López Jiménez</span>
        <span>NANI.v2 // HUD</span>
      </div>
    </footer>
  )
}
