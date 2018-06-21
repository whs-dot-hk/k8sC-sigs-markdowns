import sigsYaml from '../../../sigs.yaml'

const sigList = sigsYaml.sigs.map(sig => {
    return sig.dir;
});

export default sigList;