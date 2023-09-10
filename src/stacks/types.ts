
export type Stack = {
    stack_id: string;
    user_id: string;
    stack_name?: string;
    number_of_learned_cards?: number;
    number_of_unlearned_cards?: number;
    topic: string;
    total_downloads?: number;
    creator: string;
    created_at: string;
    last_learned_at: string;
  };