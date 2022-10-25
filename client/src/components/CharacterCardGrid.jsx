import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CharacterCard from './CharacterCard';

function CharacterCardGrid(props) {

    const characters = props.characters;

    return (
        <Row >
            {characters.map((character) => (
                <Col key={character.name}>
                    <CharacterCard
                        name={character.name}
                        pirateCrew={character.pirateCrew}
                        bounty={character.bounty}
                        imageUrl={character.imageUrl}
                        devilFruit={character.devilFruit}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default CharacterCardGrid;