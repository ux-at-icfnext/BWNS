# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "next-library"
  spec.version       = "0.1.0"
  spec.authors       = ["dara"]
  spec.email         = ["dara.pressley@icfnext.com"]

  spec.summary       = "USWDS for create ICF Nex+ Client Libraries"
  spec.homepage      = "//http://mypage.com"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
