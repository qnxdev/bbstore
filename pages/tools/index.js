import Page from '../../components/page';
import { ToolData } from '../../tooldata';
import Listing from '../../components/listing';

export default function Apps() {
    return (
        <Page title={`Tools - BlackBerry Store`}>
            <Listing data={ToolData} title='BlackBerry 10 Tools' url='/tools/' />
        </Page >
    );
}