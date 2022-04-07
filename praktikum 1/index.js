$(document).ready(function () {
    let pesanan = [
      {
        nama_pesanan: "Jet Tempur",
        total: 10,
      },
      {
        nama_pesanan: "Nuklir Hiroshima",
        total: 1,
      },
      {
        nama_pesanan: "Infinity Stone",
        total: 6,
      },
      {
        nama_pesanan: "Burj Khalifa",
        total: 5,
      },
      {
        nama_pesanan: "Rudal Hipersonik",
        total: 3,
      },
    ];
    let order = "";
    let sum = 1;
    let pesanan2 = ["Jet Tempur", "Nuklir Hiroshima", "Infinity Stone", "Burj Khalifa", "Rudal Hipersonik"];
  
    $("#pesanan" + sum).on("change", function () {
      $("#button-tambah").show();
    });
    $("#button-tambah").on("click", function () {
      let total_iterasi = pesanan.findIndex((element) => element.nama_pesanan === $("#pesanan" + sum).val());

      if ($("#total" + sum).val() <= pesanan[total_iterasi].total) {
        order += "<li>" + $("#pesanan" + sum).val() + " (" + $("#total" + sum).val() + ")</li>";
        pesanan2.splice(pesanan2.indexOf($("#pesanan" + sum).val()), 1);
        sum++;

        if (pesanan2.length > 0) {
          let a = `<div class="col-md-5"><label for="pesanan${sum}" class="form-label">pesanan</label><select name='pesanan${sum}' id='pesanan${sum}' class="form-select" required><option value="">Pilih pesanan</option>`;
          pesanan2.forEach((element) => {
            a += `<option>${element}</option>`;
          });
          a += `</select></div><div class="col-md-5"><label for='total${sum} class="form-label"'>Jumlah</label><input class="form-control" id='total${sum}' type='number' required /><div>`;
          $(this).before(a);
        }

        if (pesanan2.length <= 1) {
          $("#button-tambah").hide();
        }

      } else {
        alert(`Jumlah produk tidak mencukupi. Jumlah ${$("#pesanan" + sum).val()} =  ${pesanan[total_iterasi].total} `);
      }

    });

    $("#button-pesan").on("click", function () {
      let total_iterasi = pesanan.findIndex((element) => element.nama_pesanan === $("#pesanan" + sum).val());
      if ($("#total" + sum).val() <= pesanan[total_iterasi].total) {
        order += "<li>" + $("#pesanan" + sum).val() + " (" + $("#total" + sum).val() + ")</li>";
        $(".pesan_produk").html(`<h2 class="card-title">${$("#nama_pesanan").val()}</h2><br><ul>${order}</ul>`);
      } else {
        alert(`Jumlah produk tidak mencukupi. Jumlah ${$("#pesanan" + sum).val()} =  ${pesanan[total_iterasi].total} `);
      }

    });

  });