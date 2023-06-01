const { Marker } = require('../mdoels/Marker');

async function getAll() {
  return await Marker.findAll();
}

async function create(marker) {
  return await Marker.create(marker);
}

async function remove(id) {
  return await Marker.destroy({
    where: { id }
  });
}


module.exports = {
  getAll,
  create,
  remove
}