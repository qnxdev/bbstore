import Page from '../../components/page';
import Content from '../../components/content';
import { useRouter } from 'next/router';
import Error from 'next/error';
import {AppData} from '../../appdata';

export default function AppPage() {
    const router = useRouter()
    const id = router.asPath.slice(6);
    const app = AppData.find(app => app.appid === id);
    if (!app) return <Error statusCode={404} />;
    if (app) {
        return (
            <Page title={app.name + ` - BlackBerry Store`}>
                <Content data={app} />
            </Page>
        );
    }
}