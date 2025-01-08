export default function Numbers() {
  const numbers = [
    {
      title: "60",
      description: "Años de trayectoria",
    },
    {
      title: "30k",
      description: "Construcciones presentes",
    },
    {
      title: "80k",
      description: "Clientes satisfechos",
    },
  ];

  return (
    <div className="mt-8 px-7 grid grid-cols-3 justify-center">
      {numbers.map((item) => (
        <div className="" key={item.description}>
          <p className="text-5xl font-semibold">
            {item.title}
            <span className="text-orange-500 text-3xl">+</span>
          </p>
          <p className="text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
