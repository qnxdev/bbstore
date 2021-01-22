import Head from 'next/head';

export default function PageContainer({ title, description, children }) {
    return (
        <div>
            <Head>
                <title>{title || `BlackBerry Store`}</title>
                {description !== false && (
                    <meta
                        name="description"
                        content={description || `The storefront for downloading and sharing BlackBerry 10 Apps.`}
                    />
                )}
            </Head>
            {children}
        </div>
    );
}
