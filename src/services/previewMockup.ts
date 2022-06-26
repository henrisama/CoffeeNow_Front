export function previewMockup(
    type: string,
    size: string
){
    const sizeFormatted = 
        size === 'Small' ? 'Sm' :
        size === 'Medium' ? 'Md' :
        'Lg';
    return type+sizeFormatted+'.png';
}