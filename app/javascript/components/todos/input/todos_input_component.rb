module TodosInputComponent
  extend ComponentHelper

  property :f, required: true
  property :name, required: true

  def options
    properties.except(:f, :name, :class).merge({
      class: (Array(properties[:class]) + ["todos-input"]).join(' ')
    }).tap { |ps| puts ps.inspect }
  end
end
