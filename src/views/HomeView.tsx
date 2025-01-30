import CardList from '@/components/CardList';

const images = [
  '/assets/carrousel1.jpg',
  '/assets/carrousel2.jpg',
  '/assets/carrousel3.jpg',
  '/assets/carrousel4.jpg',
];

const HomeView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden p-1 w-full max-w-5xl mx-auto mt-8 rounded-lg shadow-neon">
        <div className="flex gap-4 animate-scroll-continuous w-[200%]">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Carrousel image ${index + 1}`}
              className="w-full h-80 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
      <CardList />
    </div>
  );
};

export default HomeView;
