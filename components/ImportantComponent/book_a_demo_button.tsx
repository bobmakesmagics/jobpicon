interface BookADemoProps {
  handleNavigation: (path: string) => void;
}

const BookADemo: React.FC<BookADemoProps> = ({ handleNavigation }) => {
  return (
    <div
      style={{
        borderRadius: '12px',
        fontWeight: 'bold',
        padding: '1.0rem 1.5rem',
      }}
      className="book-demo cursor-pointer  rounded py-2 px-4 text-white"
      onClick={() => handleNavigation('/book-demo')}
    >
      Book a demo
    </div>
  );
};

export default BookADemo;