const prices = [
  { name: "Steel HRC", price: "$812/ton", change: "+0.4%", positive: true },
  {
    name: "Aluminum",
    price: "$2,341/ton",
    change: "-0.2%",
    positive: false,
  },
  { name: "Copper", price: "$8,952/ton", change: "+1.1%", positive: true },
];

export function PriceStrip() {
  return (
    <div className="overflow-x-auto border-b border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-nowrap items-center justify-center gap-6 px-4 py-2 sm:px-6 lg:px-8">
        {prices.map((item, i) => (
          <span
            key={item.name}
            className="flex shrink-0 items-center gap-1 font-mono text-sm text-muted-foreground"
          >
            {i > 0 && (
              <span className="mr-4 text-muted-foreground/40">|</span>
            )}
            <span className="text-foreground">{item.name}:</span>{" "}
            {item.price}{" "}
            <span
              className={
                item.positive ? "text-emerald-500" : "text-red-400"
              }
            >
              {item.positive ? "▲" : "▼"} {item.change}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
