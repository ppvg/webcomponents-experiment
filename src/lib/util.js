export function trim(markup) {
    return markup.replace(/^(\s*\n)+/, "").replace(/\n\s*$/, "");
}
