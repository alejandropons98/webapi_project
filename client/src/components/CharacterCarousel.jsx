import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CharacterCard from "./CharacterCard";

function CharacterCarousel(props) {

    const characters = props.characters;

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            ssr={true} 
            autoPlay={true}
            autoPlaySpeed={2000}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
            {characters.map((character) => (
                <CharacterCard
                    name={character.name}
                    pirateCrew={character.pirateCrew}
                    bounty={character.bounty}
                    imageUrl={character.imageUrl}
                    devilFruit={character.devilFruit}
                />
            ))}
        </Carousel>
    );
}

export default CharacterCarousel;