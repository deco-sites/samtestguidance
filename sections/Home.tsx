
const cards = [
  { id: 1, title: 'Home', description: 'Home', href: '/' },
  { id: 2, title: 'Camisa Galo', description: 'Comprar camisa do galo', href: '/camisa_galo' }, 
]

export default function HomeSection() {
  return (
    <div className="max-w-7xl mx-auto p-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">Navegue nos produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <a
            key={card.id}
            href={card.href}
            className="block bg-card hover:bg-accent text-card-foreground rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
              <p className="text-muted-foreground">{card.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}