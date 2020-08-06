import Page from '../../components/page';
import Content from '../../components/content';
import { useRouter } from 'next/router';
import Error from 'next/error';
import {GameData} from '../../gamedata';

export default function AppPage() {
    const router = useRouter()
    const id = router.asPath.slice(7);
    const app = GameData.find(app => app.appid === id);
    if (!app) return <Error statusCode={404} />;
    if (app) {
        return (
            <Page title={app.name + ` - BlackBerry Store`}>
                <Content data={app} />
            </Page>
        );
    }
}