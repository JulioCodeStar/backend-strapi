module.exports = {
  async beforeCreate(event) {
    const lastRecord = await strapi.entityService.findMany(
      "api::reclamo.reclamo",
      {
        sort: { createdAt: "desc" },
        limit: 1,
      }
    );

    const nextNumber =
      lastRecord.length > 0 && lastRecord[0]?.numero
        ? parseInt(lastRecord[0].numero.split("-")[1]) + 1
        : 1;

    const nuevoNumero = `REC-${String(nextNumber).padStart(5, "0")}`;
    event.params.data.numero = nuevoNumero;

    console.log("Número generado:", nuevoNumero);
  },
};
