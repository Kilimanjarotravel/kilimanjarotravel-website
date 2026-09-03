'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Terms & Conditions',
    heroSubtitle:
      'Important information about bookings, payments, cancellations, travel arrangements and your responsibilities when travelling with Kilimanjaro Travel.',

    intro:
      'These Terms & Conditions apply to travel enquiries, quotations, bookings and travel services arranged by Kilimanjaro Travel. By confirming a booking with us, you acknowledge that you have read and accepted these terms.',

    sections: [
      {
        title: '1. Booking & Confirmation',
        text:
          'All travel arrangements are subject to availability and confirmation. A quotation or enquiry does not constitute a confirmed booking until the required arrangements and payment conditions have been agreed with the client.',
      },
      {
        title: '2. Quotations & Prices',
        text:
          'Quotations are prepared according to the itinerary, services, accommodation, transportation, permits and other arrangements requested by the client. Prices may change before confirmation where supplier prices, government charges, park fees, permits, taxes or other operational costs change.',
      },
      {
        title: '3. Payment',
        text:
          'Payment requirements and deadlines will be communicated to the client during the booking process. A booking may require a deposit or full payment depending on the service and supplier conditions. The applicable payment terms will be confirmed before the booking is finalized.',
      },
      {
        title: '4. Cancellation & Refunds',
        text:
          'Cancellation and refund conditions depend on the services booked and the policies of relevant suppliers, including accommodation, airlines, park authorities, permits and other third parties. The applicable cancellation conditions will be communicated to the client before or during confirmation of the booking.',
      },
      {
        title: '5. Changes to a Booking',
        text:
          'Requests to change dates, destinations, accommodation, transportation or other services should be made as early as possible. Changes are subject to availability and may result in additional charges from Kilimanjaro Travel or third-party suppliers.',
      },
      {
        title: '6. Itinerary Changes',
        text:
          'Travel plans may occasionally need to change because of weather, road conditions, safety considerations, wildlife conditions, government regulations, park rules, supplier availability or other circumstances beyond our reasonable control. We will make reasonable efforts to provide suitable alternatives.',
      },
      {
        title: '7. Kilimanjaro & Mountain Treks',
        text:
          'Mountain trekking involves physical activity and changing weather and environmental conditions. Clients are responsible for honestly communicating relevant health, fitness and medical information to the appropriate travel professionals and following instructions provided by guides and park authorities.',
      },
      {
        title: '8. Safari & Wildlife Activities',
        text:
          'Wildlife sightings cannot be guaranteed. Safari routes and activities may change depending on wildlife movement, weather, road conditions, park regulations and safety considerations. Guests must follow the instructions of guides and respect wildlife and protected areas.',
      },
      {
        title: '9. Accommodation',
        text:
          'Accommodation is subject to availability. Where a selected property is unavailable, a suitable alternative of comparable standard may be offered, subject to availability and applicable price differences.',
      },
      {
        title: '10. Transport & Flights',
        text:
          'Transportation and flight arrangements may be operated by independent third-party providers. Their schedules, policies, delays and cancellations may be outside our control. Clients should allow appropriate time for connections and transfers.',
      },
      {
        title: '11. Travel Documents & Visa',
        text:
          'Clients are responsible for having valid passports, visas, permits, vaccination certificates where required, travel insurance and any other documents required for their journey. Entry requirements should be checked with the relevant authorities before travel.',
      },
      {
        title: '12. Travel Insurance',
        text:
          'Appropriate travel insurance is strongly recommended. Depending on the trip, insurance should consider medical treatment, emergency evacuation, cancellation, delays, baggage and other travel-related risks.',
      },
      {
        title: '13. Children & Minors',
        text:
          "Parents or legal guardians are responsible for children travelling with them and must ensure that the selected activities are appropriate for the children's age, health and ability. Certain activities may have additional age or safety requirements.",
      },
      {
        title: '14. Client Responsibilities',
        text:
          'Clients are expected to provide accurate booking information, follow reasonable safety instructions, respect local laws, communities, cultures, wildlife, guides and service providers, and behave responsibly throughout their trip.',
      },
      {
        title: '15. Health & Safety',
        text:
          'Clients should consider their personal health and fitness before participating in activities. Where appropriate, clients should seek professional medical advice before travelling or taking part in physically demanding activities.',
      },
      {
        title: '16. Third-Party Suppliers',
        text:
          'Some services may be provided by independent hotels, transport companies, airlines, guides, park authorities and other suppliers. Their terms, operational procedures and availability may apply in addition to these terms.',
      },
      {
        title: '17. Force Majeure',
        text:
          'Kilimanjaro Travel cannot be held responsible for circumstances beyond its reasonable control, including severe weather, natural disasters, epidemics, government restrictions, civil disturbances, transport disruptions, changes in park regulations or other unforeseen events.',
      },
      {
        title: '18. Liability',
        text:
          'Kilimanjaro Travel will take reasonable care when arranging travel services. However, we are not responsible for losses, delays, injuries, cancellations or expenses resulting from circumstances beyond our reasonable control or from the acts or omissions of independent third-party suppliers, except where liability cannot legally be excluded.',
      },
      {
        title: '19. Privacy & Personal Information',
        text:
          'Information provided through our website, enquiry forms, booking forms or other communication channels may be used to process enquiries, arrange bookings and provide travel services. Personal information will be handled responsibly and for legitimate business purposes.',
      },
      {
        title: '20. Complaints',
        text:
          'If a client has a concern during a trip, the issue should be reported to our team as soon as reasonably possible so that we have an opportunity to investigate and, where possible, resolve the matter promptly.',
      },
      {
        title: '21. Governing Law',
        text:
          'These terms are intended to be interpreted in accordance with the applicable laws and regulations of the United Republic of Tanzania. Nothing in these terms is intended to remove any rights that cannot legally be excluded.',
      },
      {
        title: '22. Contact Information',
        text: '',
      },
    ],

    contact: {
      location: 'Arusha, Tanzania',
      whatsapp: 'WhatsApp: +255 759 273 339',
      email: 'Email: kilimanjarotravel.tz@gmail.com',
    },
  },

  de: {
    heroTitle: 'Allgemeine Geschäftsbedingungen',
    heroSubtitle:
      'Wichtige Informationen zu Buchungen, Zahlungen, Stornierungen, Reise arrangements und Ihren Verantwortlichkeiten bei Reisen mit Kilimanjaro Travel.',

    intro:
      'Diese Allgemeinen Geschäftsbedingungen gelten für Reiseanfragen, Angebote, Buchungen und Reisedienstleistungen, die von Kilimanjaro Travel organisiert werden. Mit der Bestätigung einer Buchung bestätigen Sie, dass Sie diese Bedingungen gelesen und akzeptiert haben.',

    sections: [
      {
        title: '1. Buchung & Bestätigung',
        text:
          'Alle Reiseleistungen unterliegen der Verfügbarkeit und Bestätigung. Ein Angebot oder eine Anfrage stellt keine bestätigte Buchung dar, bis die erforderlichen Leistungen und Zahlungsbedingungen mit dem Kunden vereinbart wurden.',
      },
      {
        title: '2. Angebote & Preise',
        text:
          'Angebote werden entsprechend der vom Kunden gewünschten Reiseroute, Leistungen, Unterkunft, Transportmittel, Genehmigungen und sonstigen Vereinbarungen erstellt. Preise können sich vor der Bestätigung ändern, wenn sich Lieferantenpreise, staatliche Gebühren, Parkgebühren, Genehmigungen, Steuern oder andere Betriebskosten ändern.',
      },
      {
        title: '3. Zahlung',
        text:
          'Zahlungsanforderungen und Fristen werden dem Kunden während des Buchungsvorgangs mitgeteilt. Je nach Leistung und Bedingungen des jeweiligen Anbieters kann eine Anzahlung oder vollständige Zahlung erforderlich sein. Die geltenden Zahlungsbedingungen werden vor Abschluss der Buchung bestätigt.',
      },
      {
        title: '4. Stornierungen & Rückerstattungen',
        text:
          'Stornierungs- und Rückerstattungsbedingungen hängen von den gebuchten Leistungen und den Richtlinien der jeweiligen Anbieter ab, einschließlich Unterkünften, Fluggesellschaften, Parkbehörden, Genehmigungen und anderen Drittanbietern. Die geltenden Bedingungen werden dem Kunden vor oder während der Buchungsbestätigung mitgeteilt.',
      },
      {
        title: '5. Änderungen einer Buchung',
        text:
          'Änderungswünsche bezüglich Reisedaten, Reisezielen, Unterkünften, Transportmitteln oder anderen Leistungen sollten so früh wie möglich mitgeteilt werden. Änderungen unterliegen der Verfügbarkeit und können zusätzliche Gebühren von Kilimanjaro Travel oder Drittanbietern verursachen.',
      },
      {
        title: '6. Änderungen der Reiseroute',
        text:
          'Reisepläne müssen möglicherweise aufgrund von Wetter, Straßenbedingungen, Sicherheitsaspekten, Wildtierbedingungen, staatlichen Vorschriften, Parkregeln, Verfügbarkeit von Anbietern oder anderen Umständen außerhalb unserer angemessenen Kontrolle geändert werden. Wir bemühen uns um geeignete Alternativen.',
      },
      {
        title: '7. Kilimanjaro & Bergtrekking',
        text:
          'Bergtrekking beinhaltet körperliche Aktivitäten sowie wechselnde Wetter- und Umweltbedingungen. Kunden sind dafür verantwortlich, relevante Gesundheits-, Fitness- und medizinische Informationen ehrlich an die zuständigen Reiseexperten weiterzugeben und die Anweisungen von Guides und Parkbehörden zu befolgen.',
      },
      {
        title: '8. Safari & Wildtieraktivitäten',
        text:
          'Wildtiersichtungen können nicht garantiert werden. Safari-Routen und Aktivitäten können abhängig von Tierbewegungen, Wetter, Straßenbedingungen, Parkvorschriften und Sicherheitsaspekten geändert werden. Gäste müssen die Anweisungen der Guides befolgen und Wildtiere sowie Schutzgebiete respektieren.',
      },
      {
        title: '9. Unterkunft',
        text:
          'Unterkünfte unterliegen der Verfügbarkeit. Wenn eine ausgewählte Unterkunft nicht verfügbar ist, kann eine geeignete Alternative mit vergleichbarem Standard angeboten werden, vorbehaltlich Verfügbarkeit und möglicher Preisunterschiede.',
      },
      {
        title: '10. Transport & Flüge',
        text:
          'Transport- und Flugleistungen können von unabhängigen Drittanbietern durchgeführt werden. Deren Fahrpläne, Richtlinien, Verspätungen und Stornierungen können außerhalb unserer Kontrolle liegen. Kunden sollten ausreichend Zeit für Anschlüsse und Transfers einplanen.',
      },
      {
        title: '11. Reisedokumente & Visa',
        text:
          'Kunden sind dafür verantwortlich, gültige Reisepässe, Visa, Genehmigungen, gegebenenfalls erforderliche Impfbescheinigungen, Reiseversicherungen und alle anderen für die Reise erforderlichen Dokumente zu besitzen. Einreisebestimmungen sollten vor der Reise bei den zuständigen Behörden überprüft werden.',
      },
      {
        title: '12. Reiseversicherung',
        text:
          'Eine geeignete Reiseversicherung wird dringend empfohlen. Je nach Reise sollte die Versicherung medizinische Behandlung, Notfallevakuierung, Stornierung, Verspätungen, Gepäck und andere reisebezogene Risiken abdecken.',
      },
      {
        title: '13. Kinder & Minderjährige',
        text:
          'Eltern oder gesetzliche Erziehungsberechtigte sind für mitreisende Kinder verantwortlich und müssen sicherstellen, dass die ausgewählten Aktivitäten dem Alter, Gesundheitszustand und den Fähigkeiten der Kinder entsprechen. Für bestimmte Aktivitäten können zusätzliche Alters- oder Sicherheitsanforderungen gelten.',
      },
      {
        title: '14. Verantwortlichkeiten des Kunden',
        text:
          'Kunden müssen korrekte Buchungsinformationen bereitstellen, angemessene Sicherheitsanweisungen befolgen, lokale Gesetze, Gemeinschaften, Kulturen, Wildtiere, Guides und Dienstleister respektieren und sich während der gesamten Reise verantwortungsvoll verhalten.',
      },
      {
        title: '15. Gesundheit & Sicherheit',
        text:
          'Kunden sollten ihre persönliche Gesundheit und Fitness berücksichtigen, bevor sie an Aktivitäten teilnehmen. Gegebenenfalls sollten sie vor der Reise oder vor körperlich anspruchsvollen Aktivitäten professionellen medizinischen Rat einholen.',
      },
      {
        title: '16. Drittanbieter',
        text:
          'Einige Leistungen können von unabhängigen Hotels, Transportunternehmen, Fluggesellschaften, Guides, Parkbehörden und anderen Anbietern erbracht werden. Zusätzlich zu diesen Bedingungen können deren eigene Bedingungen, Betriebsabläufe und Verfügbarkeiten gelten.',
      },
      {
        title: '17. Höhere Gewalt',
        text:
          'Kilimanjaro Travel haftet nicht für Umstände außerhalb unserer angemessenen Kontrolle, einschließlich schwerem Wetter, Naturkatastrophen, Epidemien, staatlichen Beschränkungen, Unruhen, Transportstörungen, Änderungen der Parkvorschriften oder anderen unvorhergesehenen Ereignissen.',
      },
      {
        title: '18. Haftung',
        text:
          'Kilimanjaro Travel wird bei der Organisation von Reiseleistungen angemessene Sorgfalt walten lassen. Wir sind jedoch nicht verantwortlich für Verluste, Verspätungen, Verletzungen, Stornierungen oder Kosten, die aus Umständen außerhalb unserer angemessenen Kontrolle oder aus Handlungen bzw. Unterlassungen unabhängiger Drittanbieter entstehen, soweit eine Haftung gesetzlich nicht ausgeschlossen werden kann.',
      },
      {
        title: '19. Datenschutz & personenbezogene Daten',
        text:
          'Informationen, die über unsere Website, Anfrageformulare, Buchungsformulare oder andere Kommunikationskanäle bereitgestellt werden, können zur Bearbeitung von Anfragen, zur Organisation von Buchungen und zur Erbringung von Reisedienstleistungen verwendet werden. Personenbezogene Daten werden verantwortungsvoll und für legitime geschäftliche Zwecke behandelt.',
      },
      {
        title: '20. Beschwerden',
        text:
          'Wenn ein Kunde während einer Reise ein Problem hat, sollte dieses so schnell wie möglich unserem Team gemeldet werden, damit wir die Möglichkeit haben, die Angelegenheit zu untersuchen und, soweit möglich, zeitnah zu lösen.',
      },
      {
        title: '21. Anwendbares Recht',
        text:
          'Diese Bedingungen sollen gemäß den geltenden Gesetzen und Vorschriften der Vereinigten Republik Tansania ausgelegt werden. Nichts in diesen Bedingungen soll Rechte ausschließen, die gesetzlich nicht ausgeschlossen werden dürfen.',
      },
      {
        title: '22. Kontaktinformationen',
        text: '',
      },
    ],

    contact: {
      location: 'Arusha, Tansania',
      whatsapp: 'WhatsApp: +255 759 273 339',
      email: 'E-Mail: kilimanjarotravel.tz@gmail.com',
    },
  },

  fr: {
    heroTitle: 'Conditions générales',
    heroSubtitle:
      'Informations importantes concernant les réservations, paiements, annulations, arrangements de voyage et vos responsabilités lorsque vous voyagez avec Kilimanjaro Travel.',

    intro:
      'Les présentes conditions générales s’appliquent aux demandes de renseignements, devis, réservations et services de voyage organisés par Kilimanjaro Travel. En confirmant une réservation avec nous, vous reconnaissez avoir lu et accepté ces conditions.',

    sections: [
      {
        title: '1. Réservation & confirmation',
        text:
          'Tous les arrangements de voyage sont soumis à disponibilité et confirmation. Un devis ou une demande ne constitue pas une réservation confirmée tant que les arrangements nécessaires et les conditions de paiement n’ont pas été convenus avec le client.',
      },
      {
        title: '2. Devis & prix',
        text:
          'Les devis sont préparés selon l’itinéraire, les services, l’hébergement, le transport, les permis et autres arrangements demandés par le client. Les prix peuvent changer avant confirmation si les prix des fournisseurs, frais gouvernementaux, frais de parc, permis, taxes ou autres coûts opérationnels changent.',
      },
      {
        title: '3. Paiement',
        text:
          'Les exigences et délais de paiement seront communiqués au client pendant le processus de réservation. Une réservation peut nécessiter un acompte ou un paiement intégral selon le service et les conditions du fournisseur. Les conditions de paiement applicables seront confirmées avant la finalisation de la réservation.',
      },
      {
        title: '4. Annulation & remboursements',
        text:
          'Les conditions d’annulation et de remboursement dépendent des services réservés et des politiques des fournisseurs concernés, notamment les hébergements, compagnies aériennes, autorités des parcs, permis et autres prestataires. Les conditions applicables seront communiquées au client avant ou pendant la confirmation de la réservation.',
      },
      {
        title: '5. Modifications d’une réservation',
        text:
          'Les demandes de modification des dates, destinations, hébergements, transports ou autres services doivent être effectuées le plus tôt possible. Les modifications sont soumises à disponibilité et peuvent entraîner des frais supplémentaires de Kilimanjaro Travel ou de prestataires tiers.',
      },
      {
        title: '6. Modifications de l’itinéraire',
        text:
          'Les plans de voyage peuvent parfois devoir être modifiés en raison des conditions météorologiques, de l’état des routes, de considérations de sécurité, des conditions liées à la faune, des réglementations gouvernementales, des règles des parcs, de la disponibilité des fournisseurs ou d’autres circonstances indépendantes de notre volonté raisonnable. Nous ferons des efforts raisonnables pour proposer des alternatives adaptées.',
      },
      {
        title: '7. Kilimandjaro & treks en montagne',
        text:
          'Le trekking en montagne implique une activité physique ainsi que des conditions météorologiques et environnementales changeantes. Les clients sont responsables de communiquer honnêtement les informations pertinentes concernant leur santé, leur condition physique et leur état médical aux professionnels du voyage concernés et de suivre les instructions des guides et des autorités des parcs.',
      },
      {
        title: '8. Safari & activités avec la faune',
        text:
          'Les observations d’animaux sauvages ne peuvent pas être garanties. Les itinéraires et activités de safari peuvent changer selon les mouvements des animaux, la météo, l’état des routes, les réglementations des parcs et les considérations de sécurité. Les visiteurs doivent suivre les instructions des guides et respecter la faune et les zones protégées.',
      },
      {
        title: '9. Hébergement',
        text:
          'L’hébergement est soumis à disponibilité. Si l’établissement sélectionné n’est pas disponible, une alternative de niveau comparable peut être proposée, sous réserve de disponibilité et d’éventuelles différences de prix.',
      },
      {
        title: '10. Transport & vols',
        text:
          'Les services de transport et les vols peuvent être opérés par des prestataires tiers indépendants. Leurs horaires, politiques, retards et annulations peuvent être indépendants de notre volonté. Les clients doivent prévoir suffisamment de temps pour les correspondances et transferts.',
      },
      {
        title: '11. Documents de voyage & visa',
        text:
          'Les clients sont responsables de disposer de passeports, visas, permis, certificats de vaccination lorsque cela est requis, assurance voyage et autres documents nécessaires à leur voyage. Les conditions d’entrée doivent être vérifiées auprès des autorités compétentes avant le départ.',
      },
      {
        title: '12. Assurance voyage',
        text:
          'Une assurance voyage appropriée est fortement recommandée. Selon le voyage, l’assurance devrait prendre en compte les soins médicaux, l’évacuation d’urgence, l’annulation, les retards, les bagages et autres risques liés au voyage.',
      },
      {
        title: '13. Enfants & mineurs',
        text:
          'Les parents ou tuteurs légaux sont responsables des enfants voyageant avec eux et doivent s’assurer que les activités sélectionnées sont adaptées à leur âge, leur santé et leurs capacités. Certaines activités peuvent avoir des exigences supplémentaires en matière d’âge ou de sécurité.',
      },
      {
        title: '14. Responsabilités du client',
        text:
          'Les clients doivent fournir des informations de réservation exactes, respecter les consignes raisonnables de sécurité, les lois locales, les communautés, les cultures, la faune, les guides et les prestataires de services, et adopter un comportement responsable pendant toute la durée du voyage.',
      },
      {
        title: '15. Santé & sécurité',
        text:
          'Les clients doivent tenir compte de leur état de santé et de leur condition physique avant de participer aux activités. Lorsque cela est approprié, ils devraient demander un avis médical professionnel avant de voyager ou de participer à des activités physiquement exigeantes.',
      },
      {
        title: '16. Prestataires tiers',
        text:
          'Certains services peuvent être fournis par des hôtels, sociétés de transport, compagnies aériennes, guides, autorités des parcs et autres fournisseurs indépendants. Leurs propres conditions, procédures opérationnelles et disponibilités peuvent s’appliquer en complément des présentes conditions.',
      },
      {
        title: '17. Force majeure',
        text:
          'Kilimanjaro Travel ne peut être tenu responsable des circonstances indépendantes de son contrôle raisonnable, notamment les conditions météorologiques extrêmes, catastrophes naturelles, épidémies, restrictions gouvernementales, troubles civils, perturbations des transports, changements dans les réglementations des parcs ou autres événements imprévus.',
      },
      {
        title: '18. Responsabilité',
        text:
          'Kilimanjaro Travel prendra des précautions raisonnables lors de l’organisation des services de voyage. Cependant, nous ne sommes pas responsables des pertes, retards, blessures, annulations ou dépenses résultant de circonstances indépendantes de notre contrôle raisonnable ou des actes ou omissions de prestataires tiers indépendants, sauf lorsque la responsabilité ne peut légalement être exclue.',
      },
      {
        title: '19. Confidentialité & informations personnelles',
        text:
          'Les informations fournies via notre site web, nos formulaires de demande, formulaires de réservation ou autres canaux de communication peuvent être utilisées pour traiter les demandes, organiser les réservations et fournir les services de voyage. Les informations personnelles seront traitées de manière responsable et à des fins commerciales légitimes.',
      },
      {
        title: '20. Réclamations',
        text:
          'Si un client rencontre un problème pendant son voyage, celui-ci doit être signalé à notre équipe dès que raisonnablement possible afin que nous puissions enquêter et, lorsque cela est possible, résoudre rapidement le problème.',
      },
      {
        title: '21. Droit applicable',
        text:
          'Ces conditions sont destinées à être interprétées conformément aux lois et règlements applicables de la République-Unie de Tanzanie. Rien dans ces conditions ne vise à supprimer les droits qui ne peuvent légalement être exclus.',
      },
      {
        title: '22. Informations de contact',
        text: '',
      },
    ],

    contact: {
      location: 'Arusha, Tanzanie',
      whatsapp: 'WhatsApp : +255 759 273 339',
      email: 'E-mail : kilimanjarotravel.tz@gmail.com',
    },
  },

  es: {
    heroTitle: 'Términos y condiciones',
    heroSubtitle:
      'Información importante sobre reservas, pagos, cancelaciones, servicios de viaje y sus responsabilidades al viajar con Kilimanjaro Travel.',

    intro:
      'Estos términos y condiciones se aplican a las consultas de viaje, presupuestos, reservas y servicios de viaje organizados por Kilimanjaro Travel. Al confirmar una reserva con nosotros, usted reconoce que ha leído y aceptado estos términos.',

    sections: [
      {
        title: '1. Reserva y confirmación',
        text:
          'Todos los servicios de viaje están sujetos a disponibilidad y confirmación. Un presupuesto o una consulta no constituye una reserva confirmada hasta que se hayan acordado con el cliente los servicios necesarios y las condiciones de pago.',
      },
      {
        title: '2. Presupuestos y precios',
        text:
          'Los presupuestos se preparan según el itinerario, servicios, alojamiento, transporte, permisos y otros servicios solicitados por el cliente. Los precios pueden cambiar antes de la confirmación si cambian los precios de los proveedores, tasas gubernamentales, tarifas de parques, permisos, impuestos u otros costes operativos.',
      },
      {
        title: '3. Pago',
        text:
          'Los requisitos y plazos de pago se comunicarán al cliente durante el proceso de reserva. Una reserva puede requerir un depósito o el pago completo dependiendo del servicio y de las condiciones del proveedor. Las condiciones de pago aplicables se confirmarán antes de finalizar la reserva.',
      },
      {
        title: '4. Cancelaciones y reembolsos',
        text:
          'Las condiciones de cancelación y reembolso dependen de los servicios reservados y de las políticas de los proveedores correspondientes, incluidos alojamientos, aerolíneas, autoridades de parques, permisos y otros terceros. Las condiciones aplicables se comunicarán al cliente antes o durante la confirmación de la reserva.',
      },
      {
        title: '5. Cambios en una reserva',
        text:
          'Las solicitudes para cambiar fechas, destinos, alojamiento, transporte u otros servicios deben realizarse lo antes posible. Los cambios están sujetos a disponibilidad y pueden generar cargos adicionales de Kilimanjaro Travel o de proveedores externos.',
      },
      {
        title: '6. Cambios en el itinerario',
        text:
          'Los planes de viaje pueden necesitar cambios debido al clima, condiciones de las carreteras, consideraciones de seguridad, condiciones de la fauna, regulaciones gubernamentales, normas de los parques, disponibilidad de proveedores u otras circunstancias fuera de nuestro control razonable. Haremos esfuerzos razonables para ofrecer alternativas adecuadas.',
      },
      {
        title: '7. Kilimanjaro y trekking de montaña',
        text:
          'El trekking de montaña implica actividad física y condiciones climáticas y ambientales cambiantes. Los clientes son responsables de comunicar honestamente la información relevante sobre su salud, condición física y situación médica a los profesionales de viaje correspondientes y de seguir las instrucciones de los guías y las autoridades de los parques.',
      },
      {
        title: '8. Safari y actividades de fauna',
        text:
          'Los avistamientos de animales salvajes no pueden garantizarse. Las rutas y actividades de safari pueden cambiar según el movimiento de los animales, el clima, las condiciones de las carreteras, las regulaciones de los parques y las consideraciones de seguridad. Los visitantes deben seguir las instrucciones de los guías y respetar la fauna y las áreas protegidas.',
      },
      {
        title: '9. Alojamiento',
        text:
          'El alojamiento está sujeto a disponibilidad. Si el establecimiento seleccionado no está disponible, se podrá ofrecer una alternativa de categoría comparable, sujeta a disponibilidad y a posibles diferencias de precio.',
      },
      {
        title: '10. Transporte y vuelos',
        text:
          'Los servicios de transporte y vuelos pueden ser operados por proveedores independientes. Sus horarios, políticas, retrasos y cancelaciones pueden estar fuera de nuestro control. Los clientes deben dejar tiempo suficiente para conexiones y traslados.',
      },
      {
        title: '11. Documentos de viaje y visado',
        text:
          'Los clientes son responsables de disponer de pasaportes, visados, permisos, certificados de vacunación cuando sean necesarios, seguro de viaje y cualquier otro documento requerido para su viaje. Los requisitos de entrada deben comprobarse con las autoridades correspondientes antes de viajar.',
      },
      {
        title: '12. Seguro de viaje',
        text:
          'Se recomienda encarecidamente contar con un seguro de viaje adecuado. Dependiendo del viaje, el seguro debería contemplar tratamiento médico, evacuación de emergencia, cancelaciones, retrasos, equipaje y otros riesgos relacionados con el viaje.',
      },
      {
        title: '13. Niños y menores',
        text:
          'Los padres o tutores legales son responsables de los niños que viajen con ellos y deben asegurarse de que las actividades seleccionadas sean adecuadas para la edad, salud y capacidad de los niños. Algunas actividades pueden tener requisitos adicionales de edad o seguridad.',
      },
      {
        title: '14. Responsabilidades del cliente',
        text:
          'Los clientes deben proporcionar información correcta de la reserva, seguir las instrucciones razonables de seguridad, respetar las leyes locales, comunidades, culturas, fauna, guías y proveedores de servicios, y comportarse de manera responsable durante todo el viaje.',
      },
      {
        title: '15. Salud y seguridad',
        text:
          'Los clientes deben considerar su salud y condición física antes de participar en las actividades. Cuando corresponda, deben buscar asesoramiento médico profesional antes de viajar o participar en actividades físicamente exigentes.',
      },
      {
        title: '16. Proveedores externos',
        text:
          'Algunos servicios pueden ser proporcionados por hoteles, empresas de transporte, aerolíneas, guías, autoridades de parques y otros proveedores independientes. Sus propios términos, procedimientos operativos y disponibilidad pueden aplicarse además de estos términos.',
      },
      {
        title: '17. Fuerza mayor',
        text:
          'Kilimanjaro Travel no será responsable de circunstancias fuera de su control razonable, incluyendo condiciones meteorológicas severas, desastres naturales, epidemias, restricciones gubernamentales, disturbios civiles, interrupciones del transporte, cambios en las regulaciones de los parques u otros acontecimientos imprevistos.',
      },
      {
        title: '18. Responsabilidad',
        text:
          'Kilimanjaro Travel actuará con un cuidado razonable al organizar los servicios de viaje. Sin embargo, no somos responsables de pérdidas, retrasos, lesiones, cancelaciones o gastos derivados de circunstancias fuera de nuestro control razonable o de actos u omisiones de proveedores externos independientes, excepto cuando la responsabilidad no pueda excluirse legalmente.',
      },
      {
        title: '19. Privacidad e información personal',
        text:
          'La información proporcionada a través de nuestro sitio web, formularios de consulta, formularios de reserva u otros canales de comunicación puede utilizarse para procesar consultas, organizar reservas y proporcionar servicios de viaje. La información personal será gestionada de manera responsable y para fines comerciales legítimos.',
      },
      {
        title: '20. Reclamaciones',
        text:
          'Si un cliente tiene alguna preocupación durante el viaje, debe comunicarla a nuestro equipo lo antes razonablemente posible para que podamos investigar y, cuando sea posible, resolver el asunto rápidamente.',
      },
      {
        title: '21. Ley aplicable',
        text:
          'Estos términos están destinados a interpretarse de acuerdo con las leyes y reglamentos aplicables de la República Unida de Tanzania. Nada de estos términos pretende eliminar derechos que legalmente no puedan excluirse.',
      },
      {
        title: '22. Información de contacto',
        text: '',
      },
    ],

    contact: {
      location: 'Arusha, Tanzania',
      whatsapp: 'WhatsApp: +255 759 273 339',
      email: 'Correo electrónico: kilimanjarotravel.tz@gmail.com',
    },
  },
};

export default function Terms() {
  const { language } = useLanguage();

  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/contact-hero.jpg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="card p-8 md:p-12">

            <p className="leading-8 text-gray-700">
              {t.intro}
            </p>

            {t.sections.map((section, index) => (
              <div key={section.title}>
                <h2 className="section-title mt-10">
                  {section.title}
                </h2>

                {index !== t.sections.length - 1 && (
                  <p className="mt-4 leading-8 text-gray-700">
                    {section.text}
                  </p>
                )}

                {index === t.sections.length - 1 && (
                  <div className="mt-4 rounded-2xl bg-gray-50 p-6 leading-8">
                    <p className="font-semibold">
                      Kilimanjaro Travel
                    </p>

                    <p>📍 {t.contact.location}</p>

                    <p>📱 {t.contact.whatsapp}</p>

                    <p>📧 {t.contact.email}</p>
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}