import Page from '../../components/page';
import Tontent from '../../components/tontent';

const ToolData =
    [
        {
            "appid": "0001",
            "name": "File Manager for BlackBerry 10",
            "download": "FileManager.bar",
            "git": "https://github.com",
            "icon": "z.jpg",
            "vendor": "BlackBerry Limited®",
            "rating": 2.5,
            "version": "1.0",
            "description": "This is the native file manager that comes pre-installed on BlackBerry 10 devices.",
            "reviews": [
                {
                    "name": "Anonymous",
                    "rated": 5.0,
                    "review": "Good App"
                },
                {
                    "name": "Anonymous",
                    "rated": 3.0,
                    "review": "Not Bad"
                }
            ],
            "scr": ["image1.jpg","image2.jpg","image3.jpg"]
        },
        {
            "appid": "0002",
            "name": "Adobe Reader",
            "download": "AdobeReader.bar",
            "git": "https://github.com",
            "icon": "y.jpg",
            "vendor": "BlackBerry Limited®",
            "rating": 2.5,
            "version": "1.0",
            "description": "Document reader.",
            "reviews": [
                {
                    "name": "Anonymous",
                    "rated": 5.0,
                    "review": "Good App"
                },
                {
                    "name": "Anonymous",
                    "rated": 3.0,
                    "review": "Not Bad"
                }
            ]
        },
        {
            "appid": "0003",
            "name": "Youtube",
            "download": "BBtube.bar",
            "git": "https://github.com",
            "icon": "y.jpg",
            "vendor": "BBtube",
            "rating": 2.5,
            "version": "1.0",
            "description": "BBtube YouTube client.",
            "reviews": [
                {
                    "name": "Anonymous",
                    "rated": 5.0,
                    "review": "Good App"
                },
                {
                    "name": "Anonymous",
                    "rated": 3.0,
                    "review": "Not Bad"
                }
            ]
        }
    ];

export default function ToolPage() {
    const id = "0001";
    const app = ToolData.find(app => app.appid===id);
    return (
        <Page title={app.name + ` - BlackBerry Store`}>
            <Tontent data={app} />
        </Page>
    );
}