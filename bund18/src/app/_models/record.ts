export class Record {
    id: number;
    device: string;
    operation: string;
    status: boolean;
    timestamp: string;
}

export class RecordPost {
    device: string;
    operation: string;
    status: boolean;
}

export class RecordStat {
    date_created: string;
    created_count: number;
}