export type DirectiveCharacterId = 'young' | 'stafford' | 'eisele' | 'cooper' | 'cernan';

export interface DirectiveCharacter {
 id: DirectiveCharacterId;
 character: string;
 shortName: string;
 actor: string;
 role: string;
 status: string;
 guideValue: string;
 avatar: string;
 portrait: string;
 alt: string;
}

export const directiveCharacters: DirectiveCharacter[] = [
 {
 id: 'young',
 character: 'Brianna Young',
 shortName: 'Young',
 actor: 'Lashana Lynch',
 role: 'Pilot / co-pilot of the Cassiopeia',
 status: 'Lead cast',
 guideValue: 'Track Young as a central route anchor for trust choices, leadership tension, and survival planning.',
 avatar: '/characters/brianna-young-avatar.webp',
 portrait: '/characters/brianna-young-portrait.webp',
 alt: 'Directive 8020 official Brianna Young character portrait',
 },
 {
 id: 'stafford',
 character: 'Nolan Stafford',
 shortName: 'Stafford',
 actor: 'Danny Sapani',
 role: 'Commander of the Cassiopeia',
 status: 'Listed cast',
 guideValue: 'Track Stafford for command decisions, mission pressure, and crew relationship consequences.',
 avatar: '/characters/nolan-stafford-avatar.webp',
 portrait: '/characters/nolan-stafford-portrait.webp',
 alt: 'Directive 8020 official Nolan Stafford character portrait',
 },
 {
 id: 'eisele',
 character: 'Laura Eisele',
 shortName: 'Eisele',
 actor: 'Not listed here yet',
 role: 'Senior Mission Officer / mission architect',
 status: 'Actor credit not listed here yet',
 guideValue: 'Track Eisele for ship systems, technical decisions, and evidence connected to the Cassiopeia.',
 avatar: '/characters/laura-eisele-avatar.webp',
 portrait: '/characters/laura-eisele-portrait.webp',
 alt: 'Directive 8020 official Laura Eisele character portrait',
 },
 {
 id: 'cooper',
 character: 'Dr. Samantha Cooper',
 shortName: 'Cooper',
 actor: 'Not listed here yet',
 role: 'Medical specialist',
 status: 'Actor credit not listed here yet',
 guideValue: 'Track Cooper for rescue routes, injury outcomes, medical choices, and survival branches.',
 avatar: '/characters/samantha-cooper-avatar.webp',
 portrait: '/characters/samantha-cooper-portrait.webp',
 alt: 'Directive 8020 official Samantha Cooper character portrait',
 },
 {
 id: 'cernan',
 character: 'Josef Cernan',
 shortName: 'Cernan',
 actor: 'Not listed here yet',
 role: 'Technical engineer',
 status: 'Actor credit not listed here yet',
 guideValue: 'Track Cernan for repairs, ship access, mechanical route locks, and crew support choices.',
 avatar: '/characters/josef-cernan-avatar.webp',
 portrait: '/characters/josef-cernan-portrait.webp',
 alt: 'Directive 8020 official Josef Cernan character portrait',
 },
];

export const crewPortraitHero = '/characters/cassiopeia-playable-crew-portraits.webp';
