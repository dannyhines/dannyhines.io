type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
  banner?: string;
  isBlog?: boolean;
};

const OG_URL = 'https://og-sigma-three.vercel.app';

export function openGraphUrl({
  siteName,
  templateTitle,
  description,
  banner,
  logo = `${OG_URL}/images/logo.jpg`,
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  if (banner) {
    const ogBanner = encodeURIComponent(banner.trim());
    return `${OG_URL}/blog?templateTitle=${ogTemplateTitle}&banner=${ogBanner}`;
  }

  return `${OG_URL}/api/gradient?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`;
}
