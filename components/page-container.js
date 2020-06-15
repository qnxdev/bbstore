import Head from 'next/head';

export default function PageContainer({ title, description, children }) {
    return (
        <div>
            <Head>
                <title>{title || `BlackBerry Store`}</title>
                {description !== false && (
                    <meta
                        name="description"
                        content={description || `The new storefront for downloading and sharing apps for BlackBerry 10.`}
                    />
                )}
            </Head>
            {children}
        </div>
    );
}