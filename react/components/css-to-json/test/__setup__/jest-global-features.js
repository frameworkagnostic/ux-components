

const OBJECT_ASSIGN = Object.assign;

global.objectAssignFeature = (set) => {
  Object.assign = set ? OBJECT_ASSIGN : null;
}