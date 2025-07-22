import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { Mail, FileBarChart2, Download } from "lucide-react";

export default function PowerBISite() {
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 p-4 md:p-10">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
          <FileBarChart2 className="h-8 w-8 text-blue-600" />
          Templates Profesionales de Power BI
          <span className="text-sm italic text-gray-500 ml-2">by COʃʃ</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Lleva tus reportes al siguiente nivel con dashboards visuales, optimizados y listos para usar. Perfectos para analistas, empresas y consultores.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-16">
        {[1, 2, 3].map((item) => (
          <Card key={item} className="hover:shadow-xl transition bg-white">
            <CardContent className="p-4">
              <FileBarChart2 className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dashboard Financiero</h3>
              <p className="text-sm text-gray-600 mb-4">
                Controla ingresos, gastos y KPIs con un diseño intuitivo y personalizable.
              </p>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_xclick" />
                <input type="hidden" name="business" value="ivanhcoss@icloud.com" />
                <input type="hidden" name="item_name" value="Template Power BI - Dashboard Financiero" />
                <input type="hidden" name="amount" value="15.00" />
                <input type="hidden" name="currency_code" value="USD" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2 w-full">
                  Comprar con PayPal
                </button>
              </form>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-6">Galería de Dashboards</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <div key={img} className="rounded-xl overflow-hidden shadow-md bg-white">
              <img
                src={`https://via.placeholder.com/600x400?text=Dashboard+${img}`}
                alt={`Dashboard ${img}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Catálogo PDF de Templates</h2>
        <p className="text-gray-600 mb-4">Descarga nuestro catálogo con ejemplos y precios detallados.</p>
        <Button variant="default" className="mx-auto">
          <Download className="mr-2 h-4 w-4" /> Descargar Catálogo
        </Button>
      </section>

      <section className="max-w-xl mx-auto bg-gray-50 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">¿Quieres recibir una demo gratuita?</h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <Input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className="w-full md:w-auto">
            <Mail className="mr-2 h-4 w-4" /> Enviar
          </Button>
        </div>
      </section>

      <footer className="mt-16 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Templates BI — Todos los derechos reservados — by COʃʃ
      </footer>
    </main>
  );
}
