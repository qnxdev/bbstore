import Page from '../../components/page';
import MinContent from '../../components/xcontent';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { ToolData } from '../../tooldata';

export default function AppPage() {
    const router = useRouter()
    const id = router.asPath.slice(7);
    const app = ToolData.find(app => app.id === id);
    if (app) {
        return (
            <Page title={app.name + ` - BlackBerry Store`}>
                <MinContent data={app} />
            </Page>
        );
    };
    if (!app) return <Error statusCode={404} />;
}