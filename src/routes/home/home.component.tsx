import taco from 'assets/tacos-gda90d85db_1920.jpg';
import burrito from 'assets/grilled-pineapple-pork-burrito-g2f46a703d_1920.jpg';
import carneAsada from 'assets/mexican-food-gc92c3b1fb_1920.jpg';
import nachos from 'assets/nachos-gae2b6ed00_1920.jpg';
import shrimpCocktail from 'assets/shrimp-g941cf57fd_1920.jpg';
import { Images, ImageContainer } from './home.styles';

const images = [taco, burrito, carneAsada, nachos, shrimpCocktail];

function Home(): JSX.Element {
  return (
    <div>
      <ImageContainer>
        {images.map((image) => (
          <Images key={image} src={image} alt={image} />
        ))}
      </ImageContainer>
    </div>
  );
}

export default Home;
