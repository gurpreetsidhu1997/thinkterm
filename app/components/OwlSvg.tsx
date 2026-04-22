export default function OwlSvg({ width = 200, height = 240 }: { width?: number; height?: number }) {
  return (
    <svg viewBox="0 0 200 240" width={width} height={height} style={{ overflow: "visible" }}>
      <g>
        <ellipse cx="100" cy="218" rx="55" ry="5" fill="rgba(31,30,27,0.12)" />
        <g fill="#E8843D">
          <path d="M 84,210 L 80,222 L 88,218 L 84,222 L 90,218 Z" />
          <path d="M 116,210 L 120,222 L 112,218 L 116,222 L 110,218 Z" />
        </g>
        <path d="M 50,118 Q 44,180 70,210 Q 100,218 130,210 Q 156,180 150,118 Q 142,68 100,58 Q 58,68 50,118 Z" fill="#F2EEE9" />
        <path d="M 100,58 Q 142,68 150,118 Q 156,180 130,210 Q 116,212 110,210 Q 124,180 124,118 Q 124,80 100,58 Z" fill="#E4DFDA" opacity="0.85" />
        <path d="M 60,72 Q 56,52 72,58 L 68,82 Z" fill="#C9C2BB" />
        <path d="M 140,72 Q 144,52 128,58 L 132,82 Z" fill="#C9C2BB" />
        <g fill="#9C948C" opacity="0.5">
          <ellipse cx="86" cy="78" rx="1.4" ry="2" /><ellipse cx="93" cy="74" rx="1.4" ry="2" />
          <ellipse cx="100" cy="72" rx="1.4" ry="2" /><ellipse cx="107" cy="74" rx="1.4" ry="2" />
          <ellipse cx="114" cy="78" rx="1.4" ry="2" /><ellipse cx="89" cy="84" rx="1.4" ry="2" />
          <ellipse cx="96" cy="82" rx="1.4" ry="2" /><ellipse cx="104" cy="82" rx="1.4" ry="2" />
          <ellipse cx="111" cy="84" rx="1.4" ry="2" />
        </g>
        <path d="M 78,128 Q 70,170 76,200 Q 100,210 120,200 Q 124,170 116,128 Q 100,124 78,128 Z" fill="#FAF7F3" />
        <g stroke="#C9C2BB" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.85">
          <path d="M 84,142 Q 92,148 100,142" /><path d="M 100,142 Q 108,148 116,142" />
          <path d="M 80,160 Q 88,166 96,160" /><path d="M 96,160 Q 104,166 112,160" />
          <path d="M 110,160 Q 118,166 122,162" /><path d="M 82,178 Q 90,184 98,178" />
          <path d="M 98,178 Q 106,184 114,178" /><path d="M 86,194 Q 94,200 100,196" />
          <path d="M 100,196 Q 106,200 114,194" />
        </g>
        <path d="M 52,118 Q 46,170 58,200 Q 70,202 74,180 Q 78,150 70,116 Z" fill="#C9C2BB" />
        <path d="M 148,118 Q 154,170 142,200 Q 130,202 126,180 Q 122,150 130,116 Z" fill="#C9C2BB" />
      </g>
      <g>
        <line x1="93" y1="100" x2="107" y2="100" stroke="#1F1E1B" strokeWidth="2.5" />
        <circle cx="82" cy="102" r="17" fill="rgba(245,245,242,0.5)" stroke="#1F1E1B" strokeWidth="3" />
        <circle cx="118" cy="102" r="17" fill="rgba(245,245,242,0.5)" stroke="#1F1E1B" strokeWidth="3" />
        <line x1="65" y1="100" x2="58" y2="98" stroke="#1F1E1B" strokeWidth="2.2" />
        <line x1="135" y1="100" x2="142" y2="98" stroke="#1F1E1B" strokeWidth="2.2" />
        <circle cx="82" cy="103" r="5" fill="#1F1E1B" />
        <circle cx="118" cy="103" r="5" fill="#1F1E1B" />
        <circle cx="83" cy="101" r="1.2" fill="#fff" />
        <circle cx="119" cy="101" r="1.2" fill="#fff" />
        <path d="M 96,118 L 100,128 L 104,118 Z" fill="#E8843D" stroke="#C76722" strokeWidth="0.8" />
      </g>
    </svg>
  );
}
