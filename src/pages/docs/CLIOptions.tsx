import { DocsLayout } from "./DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

export default function CLIOptions() {
  return (
    <DocsLayout>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1 id="cli-options">CLI Options</h1>
        
        <p className="lead">
          Complete reference for all Go Bootstrapper command-line options.
        </p>

        <h2 id="basic-usage">Basic Usage</h2>
        
        <CodeBlock code="bootstrap new <project-name> [options]" />

        <h2 id="available-options">Available Options</h2>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Option</th>
                <th>Values</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>--type</code></td>
                <td><code>rest</code>, <code>cli</code>, <code>microservice</code></td>
                <td><code>rest</code></td>
                <td>Type of project to generate</td>
              </tr>
              <tr>
                <td><code>--router</code></td>
                <td><code>gin</code>, <code>echo</code>, <code>chi</code>, <code>fiber</code></td>
                <td><code>gin</code></td>
                <td>HTTP router framework</td>
              </tr>
              <tr>
                <td><code>--db</code></td>
                <td><code>postgres</code>, <code>mysql</code>, <code>mongodb</code>, <code>none</code></td>
                <td><code>none</code></td>
                <td>Database to integrate</td>
              </tr>
              <tr>
                <td><code>--port</code></td>
                <td>Any valid port number</td>
                <td><code>8080</code></td>
                <td>Server port</td>
              </tr>
              <tr>
                <td><code>--with-docker</code></td>
                <td><code>true</code>, <code>false</code></td>
                <td><code>false</code></td>
                <td>Include Dockerfile and docker-compose</td>
              </tr>
              <tr>
                <td><code>--with-tests</code></td>
                <td><code>true</code>, <code>false</code></td>
                <td><code>true</code></td>
                <td>Generate test files</td>
              </tr>
              <tr>
                <td><code>--with-swagger</code></td>
                <td><code>true</code>, <code>false</code></td>
                <td><code>false</code></td>
                <td>Add Swagger/OpenAPI docs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="examples">Examples</h2>

        <h3 id="example-basic-rest-api">Basic REST API</h3>

        <CodeBlock code="bootstrap new myapi --type=rest --router=gin" />

        <h3 id="example-with-database">REST API with PostgreSQL</h3>

        <CodeBlock code="bootstrap new myapi --type=rest --router=gin --db=postgres" />

        <h3 id="example-microservice">Microservice with Docker</h3>

        <CodeBlock code="bootstrap new myservice --type=microservice --router=fiber --db=mongodb --with-docker=true" />

        <h3 id="example-full-featured">Full-Featured API</h3>

        <CodeBlock code="bootstrap new myapp --type=rest --router=echo --db=postgres --port=3000 --with-docker=true --with-swagger=true" />

        <h3 id="example-cli-tool">CLI Application</h3>

        <CodeBlock code="bootstrap new mytool --type=cli" />

        <h2 id="router-comparison">Router Comparison</h2>

        <h3 id="gin">Gin</h3>
        <ul>
          <li>Most popular Go web framework</li>
          <li>Fast and minimalist</li>
          <li>Great documentation</li>
          <li><strong>Best for:</strong> General-purpose REST APIs</li>
        </ul>

        <h3 id="echo">Echo</h3>
        <ul>
          <li>High performance</li>
          <li>Extensible middleware</li>
          <li>Built-in request validation</li>
          <li><strong>Best for:</strong> APIs requiring validation</li>
        </ul>

        <h3 id="chi">Chi</h3>
        <ul>
          <li>Lightweight and composable</li>
          <li>100% compatible with net/http</li>
          <li>Excellent routing capabilities</li>
          <li><strong>Best for:</strong> Standard library lovers</li>
        </ul>

        <h3 id="fiber">Fiber</h3>
        <ul>
          <li>Express-inspired API</li>
          <li>Extremely fast (built on Fasthttp)</li>
          <li>Low memory footprint</li>
          <li><strong>Best for:</strong> High-performance requirements</li>
        </ul>

        <h2 id="database-options">Database Options</h2>

        <h3 id="postgres">PostgreSQL</h3>
        <p>Includes GORM integration with connection pooling and migrations support.</p>

        <h3 id="mysql">MySQL</h3>
        <p>GORM setup with MySQL driver and common configurations.</p>

        <h3 id="mongodb">MongoDB</h3>
        <p>Official MongoDB Go driver with connection management.</p>

        <h2 id="global-flags">Global Flags</h2>

        <CodeBlock 
          code={`--help, -h     Show help information
--version, -v  Print version number
--verbose      Enable verbose logging`}
          language="text"
        />

        <h2 id="next-steps">Next Steps</h2>

        <p>
          Learn about the <a href="/docs/project-structure">generated project structure</a> or
          follow the <a href="/docs/tutorials/rest-api">REST API tutorial</a>.
        </p>
      </article>
    </DocsLayout>
  );
}
