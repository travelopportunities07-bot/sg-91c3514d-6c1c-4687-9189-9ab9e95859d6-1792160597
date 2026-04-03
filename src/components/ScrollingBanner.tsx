export function ScrollingBanner() {
  return (
    <div className="bg-gray-500 text-white py-4 overflow-hidden">
      <div className="marquee">
        <div className="marquee-content">
          <span className="text-sm uppercase tracking-wider font-medium">
            ✨ FORMATIONS CERTIFIANTES • RÉSULTATS GARANTIS • ACCOMPAGNEMENT PERSONNALISÉ • EXPERTS MULTILINGUES ✨
          </span>
          <span className="text-sm uppercase tracking-wider font-medium">
            ✨ FORMATIONS CERTIFIANTES • RÉSULTATS GARANTIS • ACCOMPAGNEMENT PERSONNALISÉ • EXPERTS MULTILINGUES ✨
          </span>
        </div>
        <div className="marquee-content" aria-hidden="true">
          <span className="text-sm uppercase tracking-wider font-medium">
            ✨ FORMATIONS CERTIFIANTES • RÉSULTATS GARANTIS • ACCOMPAGNEMENT PERSONNALISÉ • EXPERTS MULTILINGUES ✨
          </span>
          <span className="text-sm uppercase tracking-wider font-medium">
            ✨ FORMATIONS CERTIFIANTES • RÉSULTATS GARANTIS • ACCOMPAGNEMENT PERSONNALISÉ • EXPERTS MULTILINGUES ✨
          </span>
        </div>
      </div>
    </div>
  );
}