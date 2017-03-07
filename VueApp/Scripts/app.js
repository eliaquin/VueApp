new Vue({
    el: "#app",
    data: {
        formulario: {
            Nombre: "",
            Fecha: "",
            EnCarrera: false
        },
        formularios: [],
        org: "Nombre"
        
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
        },
        organizarpor: function (str) {
            this.org = str;
        }
    },
    computed: {
        cantidadObjetos: function () {
            return this.formularios.length;
        },
        organizados: function () {
            return _.sortBy(this.formularios, this.org);
        }

    },
    beforeMount: function () {
        var vm = this;
        BuscarObjeto("/api/vueapp/buscarformulario", function (obj) {
            vm.formularios = obj;
        });
    }
});