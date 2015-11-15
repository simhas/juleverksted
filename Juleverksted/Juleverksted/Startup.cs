using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Juleverksted.Startup))]
namespace Juleverksted
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
