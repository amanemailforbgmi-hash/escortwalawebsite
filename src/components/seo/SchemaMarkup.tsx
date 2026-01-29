import React from 'react';

interface SchemaMarkupProps {
    schemas: Record<string, any>[];
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ schemas }) => {
    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema)
                    }}
                />
            ))}
        </>
    );
};
