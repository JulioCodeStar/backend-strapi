import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentAboutHabilitySection extends Struct.ComponentSchema {
  collectionName: 'components_component_about_hability_sections';
  info: {
    displayName: 'HabilitySection';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
    Porcentaje: Schema.Attribute.Component<'shared.porcentaje', true>;
    span: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentAboutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_component_about_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    img_background: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentAboutInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_component_about_info_sections';
  info: {
    displayName: 'InfoSection';
  };
  attributes: {
    des: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
    List: Schema.Attribute.Component<'shared.list-item', true>;
    span: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentAboutMisionVisionSection
  extends Struct.ComponentSchema {
  collectionName: 'components_component_about_mision_vision_sections';
  info: {
    displayName: 'MisionVisionSection';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.card-img-title-description', true>;
    imgs: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    span: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentAboutValoresSection extends Struct.ComponentSchema {
  collectionName: 'components_component_about_valores_sections';
  info: {
    description: '';
    displayName: 'ValoresSection';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
    List: Schema.Attribute.Component<'shared.list-item-description', true>;
    span: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentContactFormSection extends Struct.ComponentSchema {
  collectionName: 'components_component_contact_form_sections';
  info: {
    displayName: 'FormSection';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.card-img-title-description', true>;
    img: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
    List: Schema.Attribute.Component<'shared.list-item-description', false>;
    paragraph: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentContactInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_component_contact_info_sections';
  info: {
    displayName: 'InfoSection';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.card-contact', true>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentContactMapSection extends Struct.ComponentSchema {
  collectionName: 'components_component_contact_map_sections';
  info: {
    displayName: 'MapSection';
  };
  attributes: {
    Maps: Schema.Attribute.Component<'shared.maps', true>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentHomeAboutSecion extends Struct.ComponentSchema {
  collectionName: 'components_component_home_about_secions';
  info: {
    displayName: 'AboutSecion';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
    List: Schema.Attribute.Component<'shared.list-item', true>;
    span: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentHomeCardFeatures extends Struct.ComponentSchema {
  collectionName: 'components_component_home_card_features';
  info: {
    displayName: 'CardFeatures';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.card-img-title-description', true>;
  };
}

export interface ComponentHomeChooseSection extends Struct.ComponentSchema {
  collectionName: 'components_component_home_choose_sections';
  info: {
    displayName: 'ChooseSection';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.card-number', true>;
    img_background: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    List: Schema.Attribute.Component<'shared.card-img-title-description', true>;
    span: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentHomeFaqsSection extends Struct.ComponentSchema {
  collectionName: 'components_component_home_faqs_sections';
  info: {
    displayName: 'FaqsSection';
  };
  attributes: {
    FAQS: Schema.Attribute.Component<'shared.fa-qs', true>;
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
    span: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentHomeHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_component_home_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    Button: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
    span: Schema.Attribute.String & Schema.Attribute.Required;
    title_1: Schema.Attribute.String & Schema.Attribute.Required;
    title_2: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentHomeServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_component_home_services_sections';
  info: {
    displayName: 'ServicesSection';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.card-info', true>;
    span: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentHomeTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_component_home_team_sections';
  info: {
    displayName: 'TeamSection';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.card-img-title-description', true>;
    span: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentHomeTestimonialsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_component_home_testimonials_sections';
  info: {
    displayName: 'TestimonialsSection';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.card-testimonials', true>;
    span: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentJobsBenefitSection extends Struct.ComponentSchema {
  collectionName: 'components_component_jobs_benefit_sections';
  info: {
    description: '';
    displayName: 'FeaturesSection';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.card-img-title-description', true>;
    span: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentJobsDescriptionGeneral
  extends Struct.ComponentSchema {
  collectionName: 'components_component_jobs_description_generals';
  info: {
    description: '';
    displayName: 'DescriptionGeneral';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images' | 'files'>;
    span: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentJobsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_component_jobs_hero_sections';
  info: {
    description: '';
    displayName: 'HeroSection';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
    job: Schema.Attribute.String & Schema.Attribute.Required;
    title1: Schema.Attribute.String & Schema.Attribute.Required;
    url_title1: Schema.Attribute.String;
  };
}

export interface ComponentServiceAboutSecion extends Struct.ComponentSchema {
  collectionName: 'components_component_service_about_secions';
  info: {
    displayName: 'AboutSecion';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
    List: Schema.Attribute.Component<'shared.title-item', true>;
    paragraph_img: Schema.Attribute.Text & Schema.Attribute.Required;
    span: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentServiceHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_component_service_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    img_background: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentServiceProcessService extends Struct.ComponentSchema {
  collectionName: 'components_component_service_process_services';
  info: {
    description: '';
    displayName: 'ProcessService';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.card-proceso', true>;
    span: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentServiceProductsService
  extends Struct.ComponentSchema {
  collectionName: 'components_component_service_products_services';
  info: {
    displayName: 'ProductsService';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    Producto: Schema.Attribute.Component<'shared.product-card', true>;
    span: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentServiceSubscripsService
  extends Struct.ComponentSchema {
  collectionName: 'components_component_service_subscrips_services';
  info: {
    displayName: 'SubscripsService';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    List: Schema.Attribute.Component<'shared.list-img', true>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    icon: 'hashtag';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCardContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_contacts';
  info: {
    displayName: 'Card-contact';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    list: Schema.Attribute.Component<'shared.title-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCardImgTitleDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_img_title_descriptions';
  info: {
    displayName: 'Card_img_title_description';
    icon: 'archive';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'files' | 'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCardInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_infos';
  info: {
    displayName: 'Card_Info';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    img_background: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface SharedCardNumber extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_numbers';
  info: {
    displayName: 'Card-number';
    icon: 'dashboard';
  };
  attributes: {
    count: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCardProceso extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_procesos';
  info: {
    displayName: 'CardProceso';
  };
  attributes: {
    count: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'01'>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCardTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_testimonials';
  info: {
    displayName: 'Card-testimonials';
    icon: 'earth';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    services: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaQs extends Struct.ComponentSchema {
  collectionName: 'components_shared_fa_qs';
  info: {
    displayName: 'FAQs';
    icon: 'filter';
  };
  attributes: {
    answer: Schema.Attribute.String & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedListImg extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_imgs';
  info: {
    displayName: 'List-Img';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    item: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    displayName: 'List-Item';
  };
  attributes: {
    item: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedListItemDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_item_descriptions';
  info: {
    displayName: 'List-Item-Description';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    item: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMaps extends Struct.ComponentSchema {
  collectionName: 'components_shared_maps';
  info: {
    description: '';
    displayName: 'Maps';
  };
  attributes: {
    List: Schema.Attribute.Component<'shared.list-item-description', true>;
    mapa_url: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    og_description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    og_image: Schema.Attribute.Media<'images'>;
    og_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    og_type: Schema.Attribute.String;
    og_url: Schema.Attribute.String;
  };
}

export interface SharedPorcentaje extends Struct.ComponentSchema {
  collectionName: 'components_shared_porcentajes';
  info: {
    displayName: 'Porcentaje';
  };
  attributes: {
    count: Schema.Attribute.BigInteger &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'100'>;
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedProductCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_cards';
  info: {
    displayName: 'ProductCard';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
    List: Schema.Attribute.Component<'shared.list-item', true>;
    paragraph: Schema.Attribute.Text & Schema.Attribute.Required;
    tiempo: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedTabs extends Struct.ComponentSchema {
  collectionName: 'components_shared_tabs';
  info: {
    displayName: 'Tabs';
    icon: 'bulletList';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
    List: Schema.Attribute.Component<'shared.list-item-description', true>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTitleItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_items';
  info: {
    displayName: 'Title-Item';
  };
  attributes: {
    item: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component-about.hability-section': ComponentAboutHabilitySection;
      'component-about.hero-section': ComponentAboutHeroSection;
      'component-about.info-section': ComponentAboutInfoSection;
      'component-about.mision-vision-section': ComponentAboutMisionVisionSection;
      'component-about.valores-section': ComponentAboutValoresSection;
      'component-contact.form-section': ComponentContactFormSection;
      'component-contact.info-section': ComponentContactInfoSection;
      'component-contact.map-section': ComponentContactMapSection;
      'component-home.about-secion': ComponentHomeAboutSecion;
      'component-home.card-features': ComponentHomeCardFeatures;
      'component-home.choose-section': ComponentHomeChooseSection;
      'component-home.faqs-section': ComponentHomeFaqsSection;
      'component-home.hero-section': ComponentHomeHeroSection;
      'component-home.services-section': ComponentHomeServicesSection;
      'component-home.team-section': ComponentHomeTeamSection;
      'component-home.testimonials-section': ComponentHomeTestimonialsSection;
      'component-jobs.benefit-section': ComponentJobsBenefitSection;
      'component-jobs.description-general': ComponentJobsDescriptionGeneral;
      'component-jobs.hero-section': ComponentJobsHeroSection;
      'component-service.about-secion': ComponentServiceAboutSecion;
      'component-service.hero-section': ComponentServiceHeroSection;
      'component-service.process-service': ComponentServiceProcessService;
      'component-service.products-service': ComponentServiceProductsService;
      'component-service.subscrips-service': ComponentServiceSubscripsService;
      'shared.button': SharedButton;
      'shared.card-contact': SharedCardContact;
      'shared.card-img-title-description': SharedCardImgTitleDescription;
      'shared.card-info': SharedCardInfo;
      'shared.card-number': SharedCardNumber;
      'shared.card-proceso': SharedCardProceso;
      'shared.card-testimonials': SharedCardTestimonials;
      'shared.fa-qs': SharedFaQs;
      'shared.list-img': SharedListImg;
      'shared.list-item': SharedListItem;
      'shared.list-item-description': SharedListItemDescription;
      'shared.maps': SharedMaps;
      'shared.open-graph': SharedOpenGraph;
      'shared.porcentaje': SharedPorcentaje;
      'shared.product-card': SharedProductCard;
      'shared.seo': SharedSeo;
      'shared.tabs': SharedTabs;
      'shared.title-item': SharedTitleItem;
    }
  }
}
