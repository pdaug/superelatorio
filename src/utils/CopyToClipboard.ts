const CopyToClipboard = async function (structure: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(structure);
        return true;
    } catch {
        return false;
    }
};

export default CopyToClipboard;
