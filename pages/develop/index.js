import Page from '../../components/page';
import Listing from '../../components/listing';
import { DevData } from '../../devdata';

export default function Apps() {
    return (
        <Page title={`Developer Tools - BlackBerry Store`}>
            <Listing data={DevData} title='Developer Tools' url='/develop/' />
        </Page >
    );
}