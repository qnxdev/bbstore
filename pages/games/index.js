import Page from '../../components/page';
import Listing from '../../components/listing';
import { GameData } from '../../gamedata';

export default function Apps() {
    return (
        <Page title={`Games - BlackBerry Store`}>
            <Listing data={GameData} title='Games' url='/games/' />
        </Page >
    );
}