import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";
import { createTokenizer } from "@orama/tokenizers/mandarin";

// it should be cached forever
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
    components: {
        tokenizer: createTokenizer(),
    },
    search: {
        threshold: 0,
        tolerance: 1,
    }
});
