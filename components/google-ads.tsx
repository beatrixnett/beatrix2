import Script from "next/script"

export function GoogleAds() {
  return (
    <>
      {/* Google Ads Conversion Tracking */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17711426689" />
      <Script
        id="google-ads-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17711426689');
          `,
        }}
      />
    </>
  )
}
