import React from 'react';
import { Collection, CollectionRow, NotionRenderer } from 'react-notion-x'

export default function Blog({ recordMap }) {
  return (
    <NotionRenderer 
      recordMap={recordMap} 
      fullPage={true} 
      darkMode={false}
      customImages={true}
      components={{
        image: ({
          src,
          alt,
          height,
          width,
          className,
          style,
          loading,
          decoding,
          ref,
          onLoad
        }) => (
        <img 
          className={className}
          style={style}
          src={src}
          ref={ref}
          width={width}
          height={height}
          loading={loading}
          alt={alt}
          decoding='async'
        />
        ),
        collection: Collection,
        collectionRow: CollectionRow
      }}
    />
  )
}
