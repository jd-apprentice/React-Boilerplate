/* eslint-disable camelcase */
export interface BasicRatingProps {
    text: string
}

export interface ExampleResponse {
    id: number;
    uid: string;
    account_number: string;
    iban: string;
    bank_name: string;
    routing_number: string;
    swift_bic: string;
}

export interface MediaCardProps {
    image: string;
    alt: string;
    height: string;
    maxWidth: number;
    title: string;
    body: string;
}

export type BasicAlertsProps = BasicRatingProps