type resolvePathType = (obj: object, path: string) => any

/**
 * @method
 * @category Utilities
 * @param {Object} obj Object
 * @param {string} path Path untuk nyari object
 * @returns {any} Nilai di dalam object berdasarkan path
 */
export const resolvePath: resolvePathType = (obj, path) => {
    const cleanedPath = path.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '');
    const pathArray = cleanedPath.split('.');
    return pathArray.reduce((prev: any, curr: any) => prev?.[curr], obj);
};