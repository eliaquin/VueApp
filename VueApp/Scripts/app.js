new Vue({
    el: "#app",
    data: {
        formulario: {
            Nombre: "",
            Fecha: "",
            EnCarrera: false
        },
        formularios: []
        
    },
    methods: { 
        agregar: function () {
            var vm = this;
            GuardarObjeto("/api/vueapp/formulario", vm.formulario, function (obj) {
                if (obj != 0) {
                    vm.formularios = obj;
                }

            });

           // vm.formularios.push(Vue.util.extend({}, vm.formulario));
           //// vm.formularios.push({ Nombre: vm.formulario.Nombre, Fecha: vm.formulario.Fecha, EnCarrera: vm.formulario.EnCarrera });
        }
    }
});