//$('.carousel').carousel();

$('#telefono').on('keyup', function () {
    var id = $(this).val();
    var texto = '';
    var numero = /^[0-9]+$/;
    $('#errorTel').addClass('d-none');
    if (id.length != 8) {
        texto = 'Ingrese un número teléfono válido';
        $('#errorTel').removeClass('d-none');
    }
    if (!numero.test(id)) {
        texto = 'Ingrese un número teléfono válido';
        $('#errorTel').removeClass('d-none');
    }
    var primero = id.substr(0, 1);
    if (primero != 2 && primero != 8 && primero != 7 && primero != 6) {
        texto = 'Ingrese un número teléfono válido';
        $('#errorTel').removeClass('d-none');
    }

    $('#errorTel').text(texto);
    return false;
});

$('#telefono1').on('keyup', function () {
    var id = $(this).val();
    var texto = '';
    var numero = /^[0-9]+$/;
    $('#errorTel1').addClass('d-none');
    if (id.length != 8) {
        texto = 'Ingrese un número teléfono válido';
        $('#errorTel1').removeClass('d-none');
    }
    if (!numero.test(id)) {
        texto = 'Ingrese un número teléfono válido';
        $('#errorTel1').removeClass('d-none');
    }
    var primero = id.substr(0, 1);
    if (primero != 2 && primero != 8 && primero != 7 && primero != 6) {
        texto = 'Ingrese un número teléfono válido';
        $('#errorTel1').removeClass('d-none');
    }

    $('#errorTel1').text(texto);
    return false;
});

$('#email').on('keyup', function () {
    var id = $(this).val();
    var texto = '';
    var expreCor = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,63})+$/;
    $('#errorEmail').addClass('d-none');
    if (!expreCor.test(id)) {
        texto = 'Ingrese un correo eléctronico válido';
        $('#errorEmail').removeClass('d-none');
    }

    $('#errorEmail').text(texto);
    return false;
});

$('#email1').on('keyup', function () {
    var id = $(this).val();
    var texto = '';
    var expreCor = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,63})+$/;
    $('#errorEmail1').addClass('d-none');
    if (!expreCor.test(id)) {
        texto = 'Ingrese un correo eléctronico válido';
        $('#errorEmail1').removeClass('d-none');
    }

    $('#errorEmail1').text(texto);
    return false;
});

$('#tipoidentificacion').on('change', function () {
    var tipo = $(this).val();
    var texto = '';
    if (tipo == 1) {
        //texto = 'Formato 101230123 sin espacios *';
        $('.inputNombre').addClass('d-none');
        $('#identificacion').attr('maxlength', 9);
    }
    if (tipo == 2) {
        //texto = 'Dimex 12 dígitos *';
        $('.inputNombre').removeClass('d-none');
        $('#identificacion').attr('maxlength', 12);
    }

    //$('#emailHelp').text(texto);
    var id = $('#identificacion').val();
    var texto = '';
    var numero = /^[0-9]+$/;
    if (id.length != 0 || id != '') {
        texto = '';
        $('#errorTipCed').text(texto);
    }
    if (tipo == 1) {
        if (id.length != 9) {
            texto = 'Ingrese una identificación válida';
        }
        if (!numero.test(id)) {
            $('#identificacion').val('');
            texto = 'Ingrese una identificación válida';
        }
        if (id.length == 0 || id == '') {
            texto = 'Ingrese una identificación';
        }
    }
    if (tipo == 2) {
        if (id.length != 12) {
            texto = 'Ingrese una identificación válida';
        }
        if (!numero.test(id)) {
            $('#identificacion').val('');
            texto = 'Ingrese una identificación válida';
        }
        if (id.length == 0 || id == '') {
            texto = 'Ingrese una identificación';
        }
    }
    $('#errorIden').text(texto);
    return false;
});

$('#identificacion').on('keyup', function () {
    var tipo = $('#tipoidentificacion').val();
    var id = $(this).val();
    var texto = '';
    var numero = /^[0-9]+$/;
    if (tipo.length == 0 || tipo == '' || tipo == 0) {
        texto = 'Seleccione un tipo identificación';
        $('#errorTipCed').text(texto);
        return false;
    }else{
        $('#errorTipCed').text(texto); 
    }
    if (id.length != 0 || id != '') {
        texto = '';
    }
    if (tipo == 1) {
        if (id.length != 9) {
            texto = 'Ingrese una identificación válida';
        }
        if (!numero.test(id)) {
            $('#identificacion').val('');
            texto = 'Ingrese una identificación válida';
        }
        if (id.length == 0 || id == '') {
            texto = 'Ingrese una identificación';
        }
    }
    if (tipo == 2) {
        if (id.length != 12) {
            texto = 'Ingrese una identificación válida';
        }
        if (!numero.test(id)) {
            $('#identificacion').val('');
            texto = 'Ingrese una identificación válida';
        }
        if (id.length == 0 || id == '') {
            texto = 'Ingrese una cédula ';
        }
    }
    $('#errorIden').text(texto);
    if (texto == '') {
        var url = "https://datatalks.io/wspadron/api/padron/" + id;
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            success: function (data, status) {
                //alert(data);
                //console.log(data.nombre + ' ' + data.apellido1 + ' ' + data.apellido2);
                //console.log($('#emailHelp'));
                $('#emailHelp').text(data.nombre + ' ' + data.apellido1 + ' ' + data.apellido2);

                $('#nombre').val(data.nombre);
                $('#apellido').val(data.apellido1 + ' ' + data.apellido2);

                //nombreNacional.innerHTML = data.nombre + ' ' + data.apellido1 + ' ' + data.apellido2;
                //nombre.value = data.nombre;
                //apellido.value = data.apellido1 + ' ' + data.apellido2;

                //$('#txtData').val(data.nombre + ' ' + data.apellido1 + ' ' + data.apellido2);
            },
            error: function () {
                //alert('error');
                //nombreNacional.innerHTML = 'Si es Nacional debe digitar los 9 digitos, si es Dimex 12.Error';
            }
        });
    }

    return false;
});

$('#tipoidentificacion1').on('change', function () {
    var tipo = $(this).val();
    var texto = '';
    if (tipo == 1) {
        //texto = 'Formato 101230123 sin espacios *';
        $('.inputNombre1').addClass('d-none');
        $('#identificacion1').attr('maxlength', 9);
    }
    if (tipo == 2) {
        //texto = 'Dimex 12 dígitos *';
        $('.inputNombre1').removeClass('d-none');
        $('#identificacion1').attr('maxlength', 12);
    }

    //$('#emailHelp1').text(texto);
    var id = $('#identificacion1').val();
    var texto = '';
    var numero = /^[0-9]+$/;
    if (id.length != 0 || id != '') {
        texto = '';
        $('#errorTipCed1').text(texto);
    }
    if (tipo == 1) {
        if (id.length != 9) {
            texto = 'Ingrese una identificación válida';
        }
        if (!numero.test(id)) {
            $('#identificacion1').val('');
            texto = 'Ingrese una identificación válida';
        }
        if (id.length == 0 || id == '') {
            texto = 'Ingrese una identificación';
        }
    }
    if (tipo == 2) {
        if (id.length != 12) {
            texto = 'Ingrese una identificación válida';
        }
        if (!numero.test(id)) {
            $('#identificacion1').val('');
            texto = 'Ingrese una identificación válida';
        }
        if (id.length == 0 || id == '') {
            texto = 'Ingrese una identificación';
        }
    }
    $('#errorIden1').text(texto);
    return false;
});

$('#identificacion1').on('keyup', function () {
    var tipo = $('#tipoidentificacion1').val();
    var id = $(this).val();
    var texto = '';
    var numero = /^[0-9]+$/;
    if (tipo.length == 0 || tipo == '' || tipo == 0) {
        texto = 'Seleccione un tipo identificación';
        $('#errorTipCed1').text(texto);
        return false;
    }else{
        $('#errorTipCed1').text(texto); 
    }
    if (id.length != 0 || id != '') {
        texto = '';
    }
    if (tipo == 1) {
        if (id.length != 9) {
            texto = 'Ingrese una identificación válida';
        }
        if (!numero.test(id)) {
            $('#identificacion1').val('');
            texto = 'Ingrese una identificación válida';
        }
        if (id.length == 0 || id == '') {
            texto = 'Ingrese una cédula';
        }
    }
    if (tipo == 2) {
        if (id.length != 12) {
            texto = 'Ingrese una identificación válida';
        }
        if (!numero.test(id)) {
            $('#identificacion1').val('');
            texto = 'Ingrese una identificación válida';
        }
        if (id.length == 0 || id == '') {
            texto = 'Ingrese una cédula';
        }
    }
    $('#errorIden1').text(texto);

    if (texto == '') {
        var url = "https://datatalks.io/wspadron/api/padron/" + id;
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            success: function (data, status) {
                //alert(data);
                //console.log(data.nombre + ' ' + data.apellido1 + ' ' + data.apellido2);
                //console.log($('#emailHelp'));
                $('#emailHelp1').text(data.nombre + ' ' + data.apellido1 + ' ' + data.apellido2);

                $('#nombre1').val(data.nombre);
                $('#apellido1').val(data.apellido1 + ' ' + data.apellido2);

                //nombreNacional.innerHTML = data.nombre + ' ' + data.apellido1 + ' ' + data.apellido2;
                //nombre.value = data.nombre;
                //apellido.value = data.apellido1 + ' ' + data.apellido2;

                //$('#txtData').val(data.nombre + ' ' + data.apellido1 + ' ' + data.apellido2);
            },
            error: function () {
                //alert('error');
                //nombreNacional.innerHTML = 'Si es Nacional debe digitar los 9 digitos, si es Dimex 12.Error';
            }
        });
    }

    return false;
});

$('#btnSolicitar').on('click', function () {
    var tipo = $('#tipoidentificacion').val();
    var identificacion = $('#identificacion').val();
    var telefono = $('#telefono').val();
    var email = $('#email').val();
    var nombre = $('#nombre').val();
    var apellido = $('#apellido').val();
    var tipofinanciamiento = $('#tipofinanciamiento').val();
    var modelo = $('#modelo').val();
    var motivointeres = $('#motivointeres').val();
    $('.text-informacion-req').addClass('d-none');
    var texto = '';
    var numero = /^[0-9]+$/;
    var expreCor = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,63})+$/;
    if (tipo.length == 0 || tipo == '' || tipo == 0) {
        texto = 'Seleccione un tipo identificación';
        $('.text-informacion-req').removeClass('d-none');
        $('#errorTipCed').text(texto);
        return false;
    }
    texto = '';
    if (tipo == 1) {
        if (identificacion.length != 9) {
            texto = 'Ingrese una identificación válida';
            $('#errorIden').text(texto);
            $('.text-informacion-req').removeClass('d-none');
            return false;
        }
        if (!numero.test(identificacion)) {
            texto = 'Ingrese una identificación válida';
            $('#errorIden').text(texto);
            $('.text-informacion-req').removeClass('d-none');
            return false;
        }
        if (identificacion.length == 0 || identificacion == '') {
            texto = 'Ingrese una identificación';
            $('#errorIden').text(texto);
            $('.text-informacion-req').removeClass('d-none');
            return false;
        }
    }
    if (tipo == 2) {
        if (identificacion.length != 12) {
            texto = 'Ingrese una identificación válida';
            $('#errorIden').text(texto);
            $('.text-informacion-req').removeClass('d-none');
            return false;
        }
        if (!numero.test(identificacion)) {
            texto = 'Ingrese una identificación válida';
            $('#errorIden').text(texto);
            $('.text-informacion-req').removeClass('d-none');
            return false;
        }
        if (identificacion.length == 0 || identificacion == '') {
            texto = 'Ingrese una identificación';
            $('#errorIden').text(texto);
            $('.text-informacion-req').removeClass('d-none');
            return false;
        }
        if (nombre == '' || nombre == 0 || nombre.length == 0) {
            texto = 'Ingrese un nombre';
            $('#errorNom').text(texto);
            $('.text-informacion-req').removeClass('d-none');
            return false;
        }
        if (apellido == '' || apellido == 0 || apellido.length == 0) {
            texto = 'Ingrese un apellido';
            $('#errorApe').text(texto);
            $('.text-informacion-req').removeClass('d-none');
            return false;
        }
    }
    texto = '';
    if (telefono == '' || telefono == 0 || telefono.length == 0) {
        texto = 'Ingrese un teléfono';
        $('#errorTel').text(texto);
        $('.text-informacion-req').removeClass('d-none');
        return false;
    }
    if (telefono.length != 8) {
        texto = 'Ingrese un teléfono válido';
        $('#errorTel').text(texto);
        $('.text-informacion-req').removeClass('d-none');
        return false;
    }
    if (!numero.test(telefono)) {
        texto = 'Ingrese un teléfono válido';
        $('#errorTel').text(texto);
        $('.text-informacion-req').removeClass('d-none');
        return false;
    }
    var primero = telefono.substr(0, 1);
    if (primero != 2 && primero != 8 && primero != 7 && primero != 6) {
        texto = 'Ingrese un teléfono válido';
        $('#errorTel').text(texto);
        $('.text-informacion-req').removeClass('d-none');
        return false;
    }
    texto = '';
    if (tipofinanciamiento.length == 0 || tipofinanciamiento == '' || tipofinanciamiento == 0) {
        texto = 'Seleccione un tipo financiamiento';
        $('#errorTipFinan').text(texto);
        $('.text-informacion-req').removeClass('d-none');
        return false;
    }
    texto = '';
    if (email == '' || email == 0 || email.length == 0) {
        texto = 'Ingrese un correo electrónico';
        $('#errorEmail').text(texto);
        $('.text-informacion-req').removeClass('d-none');
        return false;
    }
    if (!expreCor.test(email)) {
        texto = 'Ingrese un correo electrónico válido';
        $('#errorEmail').text(texto);
        $('.text-informacion-req').removeClass('d-none');
        return false;
    }
    texto = '';
    if (modelo.length == 0 || modelo == '' || modelo == 0) {
        texto = 'Seleccione un modelo de apartamento';
        $('#errorModel').text(texto);
        $('.text-informacion-req').removeClass('d-none');
        return false;
    }
    texto = '';
    if (motivointeres.length == 0 || motivointeres == '' || motivointeres == 0) {
        texto = 'Seleccione un motivo de interés';
        $('#errorMotInte').text(texto);
        $('.text-informacion-req').removeClass('d-none');
        return false;
    }

    $('#formdata').submit();
});

$('#btnSolicitar1').on('click', function () {
    var tipo = $('#tipoidentificacion1').val();
    var identificacion = $('#identificacion1').val();
    var telefono = $('#telefono1').val();
    var email = $('#email1').val();
    var nombre = $('#nombre1').val();
    var apellido = $('#apellido1').val();
    var tipofinanciamiento = $('#tipofinanciamiento1').val();
    var modelo = $('#modelo1').val();
    var motivointeres = $('#motivointeres1').val();
    $('.text-informacion-req1').addClass('d-none');
    var texto = '';
    var numero = /^[0-9]+$/;
    var expreCor = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,63})+$/;
    if (tipo.length == 0 || tipo == '' || tipo == 0) {
        texto = 'Seleccione un tipo identificación';
        $('.text-informacion-req1').removeClass('d-none');
        $('#errorTipCed1').text(texto);
        return false;
    }
    texto = '';
    if (tipo == 1) {
        if (identificacion.length != 9) {
            texto = 'Ingrese una identificación válida';
            $('#errorIden1').text(texto);
            $('.text-informacion-req1').removeClass('d-none');
            return false;
        }
        if (!numero.test(identificacion)) {
            texto = 'Ingrese una identificación válida';
            $('#errorIden1').text(texto);
            $('.text-informacion-req1').removeClass('d-none');
            return false;
        }
        if (identificacion.length == 0 || identificacion == '') {
            texto = 'Ingrese una identificación';
            $('#errorIden1').text(texto);
            $('.text-informacion-req1').removeClass('d-none');
            return false;
        }
    }
    if (tipo == 2) {
        if (identificacion.length != 12) {
            texto = 'Ingrese una identificación válida';
            $('#errorIden1').text(texto);
            $('.text-informacion-req1').removeClass('d-none');
            return false;
        }
        if (!numero.test(identificacion)) {
            texto = 'Ingrese una identificación válida';
            $('#errorIden1').text(texto);
            $('.text-informacion-req1').removeClass('d-none');
            return false;
        }
        if (identificacion.length == 0 || identificacion == '') {
            texto = 'Ingrese una identificación';
            $('#errorIden1').text(texto);
            $('.text-informacion-req1').removeClass('d-none');
            return false;
        }
        if (nombre == '' || nombre == 0 || nombre.length == 0) {
            texto = 'Ingrese un nombre';
            $('#errorNom1').text(texto);
            $('.text-informacion-req1').removeClass('d-none');
            return false;
        }
        if (apellido == '' || apellido == 0 || apellido.length == 0) {
            texto = 'Ingrese un apellido';
            $('#errorApe1').text(texto);
            $('.text-informacion-req1').removeClass('d-none');
            return false;
        }
    }
    texto = '';
    if (telefono == '' || telefono == 0 || telefono.length == 0) {
        texto = 'Ingrese un teléfono';
        $('#errorTel1').text(texto);
        $('.text-informacion-req1').removeClass('d-none');
        return false;
    }
    if (telefono.length != 8) {
        texto = 'Ingrese un teléfono válido';
        $('#errorTel1').text(texto);
        $('.text-informacion-req1').removeClass('d-none');
        return false;
    }
    if (!numero.test(telefono)) {
        texto = 'Ingrese un teléfono válido';
        $('#errorTel1').text(texto);
        $('.text-informacion-req1').removeClass('d-none');
        return false;
    }
    var primero = telefono.substr(0, 1);
    if (primero != 2 && primero != 8 && primero != 7 && primero != 6) {
        texto = 'Ingrese un teléfono válido';
        $('#errorTel1').text(texto);
        $('.text-informacion-req1').removeClass('d-none');
        return false;
    }
    texto = '';
    if (tipofinanciamiento.length == 0 || tipofinanciamiento == '' || tipofinanciamiento == 0) {
        texto = 'Seleccione un tipo financiamiento';
        $('#errorTipFinan1').text(texto);
        $('.text-informacion-req1').removeClass('d-none');
        return false;
    }
    texto = '';
    if (email == '' || email == 0 || email.length == 0) {
        texto = 'Ingrese un correo electrónico';
        $('#errorEmail1').text(texto);
        $('.text-informacion-req1').removeClass('d-none');
        return false;
    }
    if (!expreCor.test(email)) {
        texto = 'Ingrese un correo electrónico válido';
        $('#errorEmail1').text(texto);
        $('.text-informacion-req1').removeClass('d-none');
        return false;
    }
    texto = '';
    if (modelo.length == 0 || modelo == '' || modelo == 0) {
        texto = 'Seleccione un modelo de apartamento';
        $('#errorModel1').text(texto);
        $('.text-informacion-req1').removeClass('d-none');
        return false;
    }
    texto = '';
    if (motivointeres.length == 0 || motivointeres == '' || motivointeres == 0) {
        texto = 'Seleccione un motivo de interés';
        $('#errorMotInte1').text(texto);
        $('.text-informacion-req1').removeClass('d-none');
        return false;
    }

    $('#formdata1').submit();
});

 